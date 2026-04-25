# 202277460-moayd-shahat-assignment4

Final portfolio web application for Assignment 4. This project is an incremental upgrade from the Assignment 3 portfolio: the existing JavaScript state, filters, GitHub API integration, and form validation were preserved, then extended with a more polished personal portfolio experience, stronger documentation, a visual hero asset, and presentation support.

## Project Description

The application presents a professional portfolio for Moayd Shahat, a Software Engineering student. It brings the course concepts together in one complete static web application that can be deployed on GitHub Pages, Netlify, Vercel, or any static hosting service.

The final version demonstrates:

- responsive layout and mobile-friendly design
- persistent browser state with `localStorage`
- interactive project search, filtering, sorting, and live statistics
- GitHub REST API integration with graceful fallback behavior
- accessible form validation and live feedback
- AI usage documentation and responsible-use reflection
- technical documentation and presentation preparation

## Incremental Relationship to Assignment 3

Assignment 4 depends on Assignment 3. The Assignment 3 version already included the main technical foundation:

- theme switching
- visitor name persistence
- availability status toggle
- session timer
- project filtering and sorting
- GitHub repository API fetch
- validated contact form
- technical and AI usage documentation

Assignment 4 upgrades that base into a complete final portfolio by improving the UI, adding a professional hero image, expanding portfolio content, adding submission evidence links, updating documentation, and preparing a 5-7 minute presentation plan.

## Features

### 1. Professional Portfolio Interface

- Full hero section with a generated portfolio workspace image.
- Sticky navigation for quick access to portfolio sections.
- Clear sections for about, capabilities, projects, GitHub API data, process, contact, and submission evidence.

### 2. Stateful Visitor Experience

- Theme preference is saved in `localStorage`.
- Visitor name is saved locally and reused in the greeting.
- Availability status can be switched between available mode and focus mode.
- Session timer updates while the visitor stays on the site.

### 3. Project Discovery Logic

- Projects can be searched by title, skill, category, or description.
- Projects can be filtered by category and complexity.
- Projects can be sorted by newest, oldest, or title.
- Visible project count, visible skill count, and top match update dynamically.

### 4. API Integration

- Recent public repositories are fetched from the GitHub REST API.
- Loading, success, empty, and failure states are handled.
- A local fallback appears if the API is unavailable.

### 5. Validation and Accessibility

- Contact form validates name, email, inquiry type, and message length.
- Invalid fields are marked visually and with `aria-invalid`.
- Live regions announce validation, API, and personalization feedback.
- Keyboard focus states and a skip link are included.

## Tech Stack

- `HTML5`
- `CSS3`
- `Vanilla JavaScript`
- `GitHub REST API`

## Project Structure

```text
202277460-moayd-shahat-assignment4/
|-- README.md
|-- index.html
|-- css/
|   |-- styles.css
|-- js/
|   |-- script.js
|-- assets/
|   |-- images/
|       |-- portfolio-workspace.jpg
|-- docs/
|   |-- ai-usage-report.md
|   |-- rubric-evidence.md
|   |-- submission-checklist.md
|   |-- technical-documentation.md
|   |-- user-guide.md
|-- presentation/
|   |-- README.md
|   |-- demo-script.md
|   |-- slides.html
|-- .gitignore
|-- .nojekyll
```

## Run Locally

### Option 1: Open Directly

Open `index.html` in a modern browser.

### Option 2: Use a Static Server

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Using a local server is recommended because the GitHub API section behaves more like it will after deployment.

## Manual Testing Checklist

1. Load the page and confirm the hero image, navigation, and all sections render.
2. Toggle the theme and reload the page to confirm persistence.
3. Save a visitor name and reload to confirm the greeting is restored.
4. Toggle availability mode and confirm the status text changes.
5. Search projects by text such as `AI`, `documentation`, or `JavaScript`.
6. Test category, complexity, and sort controls together.
7. Confirm visible project statistics update with the filters.
8. Confirm GitHub repositories load, or the fallback appears if the API is unavailable.
9. Submit invalid contact form data and confirm error messages appear.
10. Submit valid contact form data and confirm the success message appears.
11. Resize the browser to desktop, tablet, and mobile widths.
12. Use keyboard navigation to confirm focus states are visible.

## Documentation

- Technical documentation: [docs/technical-documentation.md](docs/technical-documentation.md)
- AI usage report: [docs/ai-usage-report.md](docs/ai-usage-report.md)
- User guide: [docs/user-guide.md](docs/user-guide.md)
- Rubric evidence: [docs/rubric-evidence.md](docs/rubric-evidence.md)
- Submission checklist: [docs/submission-checklist.md](docs/submission-checklist.md)
- Presentation plan: [presentation/README.md](presentation/README.md)

## Deployment

This is a static website. It can be deployed by uploading the repository to GitHub Pages, Netlify, Vercel, or any similar static host.

For the final Assignment 4 submission, the GitHub repository should be named:

```text
202277460-moayd-shahat-assignment4
```

## Submission Notes

- No external frameworks are required.
- The project is intentionally lightweight for good performance.
- AI-assisted work is documented in `docs/ai-usage-report.md`.
- The presentation structure is prepared in `presentation/README.md`.
