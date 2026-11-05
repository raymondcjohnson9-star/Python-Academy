# Python Academy

A beginner-friendly, non-AI Python learning app. It teaches with structured lessons, knowledge checks, practice and an in-browser Python playground.

## Features
- A five-level curriculum roadmap: Beginner, Intermediate, Advanced, Professional Python and Real-World Projects.
- All 91 syllabus topics are now represented as interactive lesson entries with explanations, runnable examples, three exercises and a knowledge check. The first 12 beginner lessons have individually authored lesson content; later lessons use structured topic-specific templates and examples where available.
- - A topic unlocks only after the learner passes its quiz and marks all three exercises attempted.
- Sequential lesson unlocking: pass the knowledge check before completing a topic and unlocking the next.
- Resume learning and local progress saved in the browser.
- In-browser Python execution powered by Pyodide (Python compiled to WebAssembly).
- Practice area with editable code, output, hints and a solution.
- Six guided workflows: three learning routines and three real-world coding routines for project planning, debugging and finishing projects. Workflow checklists save separately from lesson progress.
- Installable progressive web app shell with offline caching of the lesson interface and static assets.

## Run locally
Serve this folder with a local web server (service workers and PWA installation require HTTPS or localhost). Opening index.html directly with file:// will not enable the service worker.

## Python engine and internet
The lesson interface and cached static assets can be available offline after the first successful visit. The Python engine is loaded from the Pyodide CDN on first execution, so the first code run requires an internet connection. This version does not yet cache the full Python runtime for offline code execution.

## Progress storage
Progress is stored in localStorage on the current browser/device. It is not synchronized between devices and may be cleared if browser data is removed.

## Current scope
This is a learning MVP, not yet a complete reference for every Python feature. This is a broad learning curriculum, not an exhaustive reference to every Python library or language feature. Several advanced topics use introductory templates and some examples show commented setup commands for tools that must be installed outside the browser playground. Automated browser testing and deeper editorial review are still needed. Accessibility checks and automated browser testing are also still needed.
