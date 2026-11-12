# Python Academy

A beginner-friendly, non-AI Python learning app. It teaches with structured lessons, knowledge checks, practice and an in-browser Python playground.

## Features
- Five learning levels: Beginner, Intermediate, Advanced, Professional Python and Real-World Projects.
- 91 lesson entries matching the curriculum roadmap. The first 12 foundation lessons have individually authored explanations and examples; the remaining 79 are introductory starter lessons that still need full editorial development.
- Each lesson includes teaching sections, a runnable example, three practice tasks and a multiple-choice knowledge check.
- Sequential unlocking: learners must pass the lesson quiz and mark all three practice tasks as attempted before moving on. Practice tasks are currently self-attested, not automatically graded.
- Resume learning and local progress saved in the browser.
- In-browser Python execution powered by Pyodide, with captured standard output/error and a separate multi-line input area for Python input() calls.
- Six guided workflows for learning, practice, review, project planning, debugging and finishing projects.
- Installable progressive web app shell with offline caching of the lesson interface and static assets.
- GitHub Actions quality checks for JavaScript syntax, curriculum consistency, practice-set completeness and Python example syntax.

## Run locally
Serve this folder with a local web server. Service workers and PWA installation require HTTPS or localhost. Opening index.html directly with file:// will not enable the service worker.

## Python engine and internet
The lesson interface and cached static assets can be available offline after the first successful visit. The Python engine is loaded from the Pyodide CDN on first execution, so the first code run requires an internet connection. The playground accepts one input line for each input() call. This version does not cache the full Python runtime for offline code execution.

## Progress storage
Progress is stored in localStorage on the current browser/device. It is not synchronized between devices and may be cleared if browser data is removed.

## Current scope and next work
This is a learning MVP, not yet a complete reference or fully authored course for every topic. The later 79 lesson entries use introductory templates and still need detailed sub-lessons, topic-specific worked examples, more than one knowledge-check question and stronger practice assessment. Browser end-to-end testing and accessibility checks are still needed. Python code currently runs on the page thread, so learners should avoid endless loops; an execution stop control is not implemented yet.
