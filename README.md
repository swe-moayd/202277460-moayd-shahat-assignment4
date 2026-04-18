# 202277460-moayd-shahat-assignment3

Assignment 3 portfolio project for SWE coursework. This submission upgrades the earlier portfolio into a stateful single-page web application with richer JavaScript behavior, GitHub API integration, responsive design, and explicit AI-usage documentation.

## Project Overview

The application presents a personal portfolio for Moayd Shahat and focuses on the Assignment 3 grading areas:

- advanced client-side logic
- API integration with graceful failure handling
- persistent browser state using `localStorage`
- validated user interaction through forms and filters
- responsive and accessible interface behavior
- supporting technical and AI documentation

## Features

### 1. State Management

- Theme preference is saved in `localStorage`
- Visitor name is saved and reused in the greeting
- Availability mode can be toggled between available and focus mode
- A live session timer updates while the visitor stays on the page

### 2. Complex JavaScript Logic

- Project cards can be searched by title or skill
- Projects can be filtered by category
- Projects can be filtered by visitor level
- Projects can be sorted by newest, oldest, or title
- Recommendation text changes based on the selected visitor level

### 3. API Integration

- The portfolio fetches recent public repositories from the GitHub REST API
- Loading, success, and failure states are handled in the UI
- Requests use `AbortController` timeout protection

### 4. Validation and UX

- Contact form validates multiple fields before submission
- Invalid fields are visually highlighted
- Status messages use live regions for clearer feedback
- Keyboard focus styles are included for accessibility

### 5. Responsive Design

- Layout adapts for desktop, tablet, and mobile widths
- Controls stack cleanly on smaller screens
- Motion is reduced automatically for users with reduced-motion preferences

## Tech Stack

- `HTML5`
- `CSS3`
- `Vanilla JavaScript`
- `GitHub REST API`

## Project Structure

```text
202277460-moayd-shahat-assignment3/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── docs/
│   ├── technical-documentation.md
│   └── ai-usage-report.md
└── .gitignore
```

## Setup Instructions

### Option 1: Open directly

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in a browser.

### Option 2: Run with a local static server

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How To Test

1. Toggle the theme and reload the page to confirm persistence.
2. Save a visitor name and reload to confirm it stays stored.
3. Toggle the availability status and confirm the status text changes.
4. Use search, category, level, and sorting controls in different combinations.
5. Confirm the level message changes when visitor level changes.
6. Test the contact form with invalid and valid inputs.
7. Disconnect the network temporarily to confirm the GitHub API error fallback appears.
8. Resize the browser to confirm the layout remains usable on small screens.

## API Information

- API: GitHub REST API
- Endpoint: `https://api.github.com/users/swe-moayd/repos?sort=updated&per_page=6`
- Purpose: display recent public repositories dynamically inside the portfolio

## Documentation

- Technical documentation: [docs/technical-documentation.md](docs/technical-documentation.md)
- AI usage report: [docs/ai-usage-report.md](docs/ai-usage-report.md)

## Submission Notes

- No external frameworks were used.
- The project is intentionally lightweight for good browser performance.
- The repository is ready to deploy on GitHub Pages or any static hosting platform.
