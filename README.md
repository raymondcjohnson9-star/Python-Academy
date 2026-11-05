# Python Academy

A beginner-friendly, non-AI Python learning app. It teaches with structured lessons, knowledge checks, practice and an in-browser Python playground.

## Features
- A five-level curriculum roadmap: Beginner, Intermediate, Advanced, Professional Python and Real-World Projects.
- The first 12 beginner topics are interactive, each with extra explanations, three hands-on exercises and a knowledge check.
- Intermediate, advanced, professional and project syllabuses are visible as upcoming course levels; their interactive lessons will be added in stages.\n- A topic unlocks only after the learner passes its quiz and marks all three exercises attempted.
- Sequential lesson unlocking: pass the knowledge check before completing a topic and unlocking the next.
- Resume learning and local progress saved in the browser.
- In-browser Python execution powered by Pyodide (Python compiled to WebAssembly).
- Practice area with editable code, output, hints and a solution.
- Installable progressive web app shell with offline caching of the lesson interface and static assets.

## Run locally
Serve this folder with a local web server (service workers and PWA installation require HTTPS or localhost). Opening index.html directly with file:// will not enable the service worker.

## Python engine and internet
The lesson interface and cached static assets can be available offline after the first successful visit. The Python engine is loaded from the Pyodide CDN on first execution, so the first code run requires an internet connection. This version does not yet cache the full Python runtime for offline code execution.

## Progress storage
Progress is stored in localStorage on the current browser/device. It is not synchronized between devices and may be cleared if browser data is removed.

## Current scope
This is a learning MVP, not yet a complete reference for every Python feature. The next development stage is to turn the upcoming syllabus topics into complete interactive lessons with explanations, examples, exercises and quizzes. Accessibility checks and automated browser testing are also still needed.
