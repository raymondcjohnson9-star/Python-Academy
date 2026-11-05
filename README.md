# Python Academy

A beginner-friendly, non-AI Python learning app. Lessons, quizzes and progress are built into the app.

## Current features
- A 12-lesson beginner Python learning path.
- Lessons unlock in order: pass the quick knowledge check to complete a lesson and unlock the next.
- **Resume learning:** the app remembers the last lesson and completed lessons in browser local storage.
- Course progress indicator and lesson overview.
- A starter practice challenge.
- Responsive layout for phones, tablets and desktop.
- Installable web-app manifest.

## Run locally
Open `index.html` in a modern browser, or serve this folder with a local static web server. No AI service, account or API key is required.

## Progress storage
Progress is saved in the browser on the current device using localStorage. Clearing browser site data or switching devices/browsers can remove or separate that progress. Cloud sync and accounts are not included yet.

## Roadmap
- Add more lessons and exercises to each topic.
- Add a real Python code runner.
- Add optional accounts and cloud progress sync.
- Add offline lesson caching and accessibility improvements.

## Project files
- `index.html` — app structure
- `styles.css` — responsive visual design
- `app.js` — lesson content, navigation, quizzes and saved progress
- `manifest.json` — installable app metadata
