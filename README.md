# Python Academy

A beginner-friendly, non-AI Python learning app. It teaches with structured lessons, knowledge checks, practice and an in-browser Python playground.

## Features
- 12 ordered beginner topics, with lesson explanations and quizzes.
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
This is a learning MVP, not yet a complete reference for every Python feature. Future improvements can add deeper sub-lessons, more exercises, accessibility checks and automated browser testing.
