# 202277460-moayd-shahat-assignment3

This project is an upgraded portfolio web application created for Assignment 3. It builds on the earlier assignment by adding state management, API integration, stronger client-side logic, improved UI structure, and fuller documentation.

## Project Description

The application presents a personal portfolio for Moayd Shahat and demonstrates:

- Persistent light/dark theme state using `localStorage`
- Visitor name storage and personalized greeting
- Simulated availability state toggle
- Session timer showing how long the visitor has stayed on the site
- Project filtering by category and visitor level
- Project sorting by date or title
- Dynamic recommendation messaging based on visitor choices
- GitHub API integration for live public repositories
- Contact form validation with multiple rule checks

## Folder Structure

```text
202277460-moayd-shahat-assignment3/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Setup Instructions

1. Clone the repository.
2. Open the project folder locally.
3. Run the site with any static server, or open `index.html` directly in a browser.

Example using Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## API Used

- GitHub REST API
- Endpoint used: `https://api.github.com/users/swe-moayd/repos?sort=updated&per_page=6`

If the API request fails, the UI shows a user-friendly error message instead of breaking.

## AI Usage Summary

AI was used for implementation support, code refinement, debugging guidance, and documentation drafting. Full details are documented in [docs/ai-usage-report.md](docs/ai-usage-report.md).
## Technical Documentation

Full technical notes are available in [docs/technical-documentation.md](docs/technical-documentation.md).

## Deployment

This project can be deployed easily to GitHub Pages, Netlify, or Vercel.
