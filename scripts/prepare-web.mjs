import { cp, mkdir, rm } from "node:fs/promises";

const files = [
  "index.html",
  "styles.css",
  "manifest.json",
  "service-worker.js",
  "app.js",
  "topic-extras.js",
  "curriculum.js",
  "extended-lessons.js",
  "workflows.js"
];

await rm("www", { recursive: true, force: true });
await mkdir("www", { recursive: true });
for (const file of files) {
  await cp(file, `www/${file}`);
}
console.log("Prepared Python Academy web assets in www/");
