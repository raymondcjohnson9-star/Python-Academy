import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import { spawnSync } from "node:child_process";

const read = (path) => readFile(new URL("../" + path, import.meta.url), "utf8");
const context = { console };
context.window = context;

for (const path of ["curriculum.js", "topic-extras.js", "extended-lessons.js", "workflows.js"]) {
  runInNewContext(await read(path), context, { filename: path });
}
context.topicExtras = context.window.topicExtras;

const appSource = await read("app.js");
const storageMarker = "\nconst STORAGE_KEY";
const markerIndex = appSource.indexOf(storageMarker);
assert.notEqual(markerIndex, -1, "Could not find the lesson data section in app.js");
const lessonBootstrap = appSource.slice(0, markerIndex);
runInNewContext(lessonBootstrap + "\nglobalThis.__academyLessons = lessons;", context, { filename: "app-lessons.js" });

const lessons = context.__academyLessons;
const topics = Array.from(context.pythonCurriculum).flatMap((level) => Array.from(level.topics));
assert.equal(topics.length, 91, "Expected 91 curriculum topics");
assert.equal(lessons.length, topics.length, "Every curriculum topic should have a lesson entry");
assert.deepEqual(Array.from(lessons, (lesson) => lesson.title), topics, "Lesson titles must match the curriculum order");
assert.equal(context.topicExtras.length, lessons.length, "Every lesson must have practice extras");

for (const [index, lesson] of lessons.entries()) {
  const number = index + 1;
  assert.ok(lesson.desc && lesson.intro, "Lesson " + number + " needs a description and introduction");
  assert.ok(Array.isArray(lesson.sections) && lesson.sections.length >= 2, "Lesson " + number + " needs at least two teaching sections");
  assert.ok(typeof lesson.code === "string" && lesson.code.trim(), "Lesson " + number + " needs a code example");
  assert.ok(lesson.question && Array.isArray(lesson.options) && lesson.options.length >= 3, "Lesson " + number + " needs a knowledge check");
  assert.ok(Number.isInteger(lesson.answer) && lesson.answer >= 0 && lesson.answer < lesson.options.length, "Lesson " + number + " has an invalid answer index");
  const extra = context.topicExtras[index];
  assert.ok(extra.extra && Array.isArray(extra.tasks) && extra.tasks.length === 3, "Lesson " + number + " needs three practice tasks");
}

const workflowList = context.pythonAcademyWorkflows;
assert.ok(Array.isArray(workflowList) && workflowList.length >= 6, "Expected the guided and real-world workflow collection");
for (const flow of workflowList) {
  assert.ok(flow.title && flow.category && Array.isArray(flow.steps) && flow.steps.length >= 3, "Workflow " + flow.id + " is incomplete");
}

assert.ok(appSource.includes("py.setStdin("), "The playground should provide Python standard input");
assert.ok(appSource.includes("loadPyodide({ indexURL: PYODIDE_CDN })"), "Pyodide should load from its explicit CDN directory");
assert.ok(appSource.includes("taskChecks.every(Boolean)"), "Lesson completion must require all practice tasks to be attempted");

const pythonCheck = spawnSync("python3", ["-c", [
  "import json, sys",
  "snippets = json.load(sys.stdin)",
  "for number, source in enumerate(snippets, 1):",
  "    try:",
  "        compile(source, f'<lesson-{number}>', 'exec')",
  "    except SyntaxError as error:",
  "        print(f'Lesson {number}: {error}', file=sys.stderr)",
  "        raise SystemExit(1)",
  "print(f'Validated Python syntax for {len(snippets)} lesson examples.')",
].join("\n")], {
  input: JSON.stringify(Array.from(lessons, (lesson) => lesson.code)),
  encoding: "utf8",
});

if (pythonCheck.error) throw pythonCheck.error;
assert.equal(pythonCheck.status, 0, pythonCheck.stderr || pythonCheck.stdout);

console.log("Validated " + lessons.length + " lessons, " + context.topicExtras.length + " practice sets, " + workflowList.length + " workflows and all Python example syntax.");
