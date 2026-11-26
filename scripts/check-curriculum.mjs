import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import { spawnSync } from "node:child_process";

const read = (path) => readFile(new URL("../" + path, import.meta.url), "utf8");
const context = { console };
context.window = context;

for (const path of ["curriculum.js", "topic-extras.js", "extended-lessons.js", "beginner-authored.js", "beginner-challenges.js", "workflows.js"]) {
  runInNewContext(await read(path), context, { filename: path });
}
context.topicExtras = context.window.topicExtras;

const appSource = await read("app.js");
const markerIndex = appSource.indexOf("\nconst STORAGE_KEY");
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

const beginnerChallenges = context.pythonAcademyBeginnerChallenges;
assert.equal(beginnerChallenges.length, 17, "Expected graded challenges for all 17 Beginner lessons");
let gradedChallengeCount = 0;
for (const [lessonIndex, challenges] of beginnerChallenges.entries()) {
  assert.equal(challenges.length, 3, "Beginner lesson " + (lessonIndex + 1) + " must have three graded exercises");
  for (const [challengeIndex, challenge] of challenges.entries()) {
    assert.ok(challenge.prompt && typeof challenge.starter === "string", "Challenge prompt/starter missing");
    assert.ok(typeof challenge.solution === "string" && challenge.solution.trim(), "Challenge solution missing");
    assert.ok(typeof challenge.expected === "string", "Challenge expected output missing");
    assert.ok(typeof challenge.stdin === "string", "Challenge input fixture must be a string");
    gradedChallengeCount++;
  }
}

const workflowList = context.pythonAcademyWorkflows;
assert.ok(Array.isArray(workflowList) && workflowList.length >= 6, "Expected the guided and real-world workflow collection");
for (const flow of workflowList) {
  assert.ok(flow.title && flow.category && Array.isArray(flow.steps) && flow.steps.length >= 3, "Workflow " + flow.id + " is incomplete");
}

assert.ok(appSource.includes("py.setStdin("), "The playground should provide Python standard input");
assert.ok(appSource.includes("loadPyodide({ indexURL: PYODIDE_CDN })"), "Pyodide should load from its explicit CDN directory");
assert.ok(appSource.includes("checkBeginnerChallenge"), "Beginner practice must have an output-checking runner");
assert.ok(appSource.includes("canCompleteCurrentLesson()"), "Lesson completion must use the quiz and practice gate");
assert.ok(appSource.includes("practicePassed"), "Passed beginner checks must be saved");

const pythonSource = String.raw`import json, subprocess, sys, tempfile
data = json.load(sys.stdin)
challenges = [item for group in data["beginner_challenges"] for item in group]
snippets = data["lesson_examples"] + [item["starter"] for item in challenges] + [item["solution"] for item in challenges]
for number, source in enumerate(snippets, 1):
    try:
        compile(source, f"<python-snippet-{number}>", "exec")
    except SyntaxError as error:
        print(f"Python snippet {number}: {error}", file=sys.stderr)
        raise SystemExit(1)
for lesson_number, group in enumerate(data["beginner_challenges"], 1):
    for exercise_number, challenge in enumerate(group, 1):
        with tempfile.TemporaryDirectory() as workdir:
            result = subprocess.run(
                [sys.executable, "-c", challenge["solution"]],
                input=challenge["stdin"],
                text=True,
                capture_output=True,
                cwd=workdir,
                timeout=8,
            )
        if result.returncode != 0:
            print(f"Lesson {lesson_number}, exercise {exercise_number} failed: {result.stderr}", file=sys.stderr)
            raise SystemExit(1)
        actual = result.stdout.rstrip(chr(10)).replace(chr(13), "")
        expected = challenge["expected"].rstrip(chr(10)).replace(chr(13), "")
        if actual != expected or result.stderr:
            print(f"Lesson {lesson_number}, exercise {exercise_number}: expected {expected!r}, got {actual!r}; stderr={result.stderr!r}", file=sys.stderr)
            raise SystemExit(1)
print(f"Validated {len(data['lesson_examples'])} lesson examples and {len(challenges)} graded beginner solutions.")`;

const pythonCheck = spawnSync("python3", ["-c", pythonSource], {
  input: JSON.stringify({
    lesson_examples: Array.from(lessons, (lesson) => lesson.code),
    beginner_challenges: Array.from(beginnerChallenges, (group) => Array.from(group, (challenge) => ({
      solution: challenge.solution,
      starter: challenge.starter,
      stdin: challenge.stdin,
      expected: challenge.expected,
    }))),
  }),
  encoding: "utf8",
});
if (pythonCheck.error) throw pythonCheck.error;
assert.equal(pythonCheck.status, 0, pythonCheck.stderr || pythonCheck.stdout);

console.log("Validated " + lessons.length + " lessons, " + context.topicExtras.length + " practice sets, " + gradedChallengeCount + " graded beginner exercises, " + workflowList.length + " workflows and Python example syntax/output fixtures.");
