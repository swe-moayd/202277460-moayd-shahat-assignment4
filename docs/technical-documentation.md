# Technical Documentation

## 1. Overview

This project is a static single-page portfolio web application built with HTML, CSS, and vanilla JavaScript. Assignment 4 extends the Assignment 3 implementation into a final professional portfolio that is ready for demonstration and deployment.

The Assignment 3 base provided the core application logic:

- persistent state
- project filtering and sorting
- GitHub API integration
- contact form validation
- technical and AI documentation

Assignment 4 keeps those features and adds a more complete portfolio structure, stronger UI polish, visual media, expanded project evidence, and presentation support.

## 2. Architecture

The project is intentionally dependency-free and organized by responsibility:

- `index.html` defines the semantic page structure and portfolio sections.
- `css/styles.css` controls the visual system, layout, responsiveness, theme tokens, and accessibility states.
- `js/script.js` owns application state, rendering, event handling, validation, filtering, sorting, and API calls.
- `assets/images/portfolio-workspace.jpg` provides the optimized visual hero asset.
- `docs/ai-usage-report.md` documents how AI assistance was used and reviewed.
- `docs/user-guide.md` explains how a visitor or grader can use the site.
- `presentation/README.md` provides a 5-7 minute presentation plan.

## 3. Application Flow

When the page loads:

1. Saved values are read from `localStorage`.
2. Event listeners are attached to controls and forms.
3. Theme, greeting, availability status, projects, and timer are rendered.
4. GitHub repository data is requested from the public GitHub API.
5. The session timer updates every second.

This keeps the page usable immediately while the API request happens asynchronously.

## 4. Core Features

### 4.1 Persistent State

The app stores selected values in `localStorage`:

- theme preference
- visitor name
- availability status

These values are restored on page load through the `state` object. This demonstrates client-side state persistence without a backend.

### 4.2 Dynamic Project Rendering

Project data is stored in a structured JavaScript array. The project section supports:

- full-text search across title, description, category, complexity, and stack
- category filtering
- complexity filtering
- sorting by newest, oldest, or title
- live visible project count
- live visible skill count
- top match summary

The filtering and sorting logic is centralized in `getFilteredProjects()` so the displayed cards and statistics always use the same source of truth.

### 4.3 GitHub API Integration

The application fetches public repositories from:

```text
https://api.github.com/users/swe-moayd/repos?sort=updated&per_page=6
```

Implementation details:

- `fetch()` is used with an `Accept` header.
- `AbortController` cancels slow requests after six seconds.
- Loading, success, empty, and error states are displayed.
- Local fallback repository cards are shown if the API is unavailable.

This prevents the page from appearing broken during network issues.

### 4.4 Contact Form Validation

The contact form validates:

- required name
- valid email pattern
- selected inquiry type
- message length of at least 20 characters

Invalid fields receive an error class and `aria-invalid="true"`. The result message uses a live region so feedback is announced to assistive technology.

### 4.5 Theme and Status Controls

The theme toggle switches between light and dark mode by applying a class to the `body`. The availability control updates the portfolio status message and saves the preference.

## 5. Accessibility Considerations

The project includes:

- semantic landmarks: `header`, `nav`, `main`, `section`, and `footer`
- a skip link for keyboard users
- associated labels for all inputs
- visible keyboard focus styles
- `aria-pressed` for toggle buttons
- `aria-live` for dynamic feedback
- `aria-invalid` for validation errors
- reduced-motion support through `prefers-reduced-motion`
- descriptive alternative text for the hero image

## 6. Responsive Design

The layout uses CSS Grid and flexible containers. Major responsive decisions include:

- desktop navigation uses a three-column header
- tablet layout stacks the header and uses two-column content grids
- mobile layout stacks cards, controls, buttons, and state panels into one column
- hero text sizes are reduced at smaller breakpoints
- controls have stable dimensions to prevent layout jumps

## 7. Code Quality Decisions

Several choices support maintainability:

- state values are grouped in one `state` object
- storage key strings are centralized in `storageKeys`
- DOM references are grouped in an `elements` object
- rendering functions are focused by responsibility
- project and fallback repository data use structured objects
- card rendering uses DOM methods instead of unsafe HTML injection
- validation rules are separated from submit handling

## 8. Performance Notes

The application is lightweight:

- no external frameworks
- no build step
- one stylesheet
- one script file
- one optimized visual asset
- limited GitHub API payload
- timeout protection for slow API responses

This keeps the portfolio fast enough for static hosting and classroom demonstration.

## 9. Browser Compatibility

The project targets current desktop and mobile browsers that support:

- `fetch`
- `localStorage`
- `AbortController`
- CSS Grid
- `classList`
- `Set`

It is expected to work in current Chrome, Edge, Firefox, and Safari.

## 10. Manual Verification Checklist

1. Load the page and confirm the hero image appears.
2. Confirm sticky navigation links move to the correct sections.
3. Toggle dark theme and reload the page.
4. Save a visitor name and reload the page.
5. Toggle availability status and confirm persistence.
6. Test project search with `AI`, `JavaScript`, and `documentation`.
7. Combine category, complexity, and sorting filters.
8. Confirm project statistics update after each filter change.
9. Confirm GitHub API cards load or fallback cards appear.
10. Test invalid and valid contact form submissions.
11. Navigate with keyboard only and confirm visible focus.
12. Resize to mobile width and confirm controls do not overlap.

## 11. Known Limitations

- The contact form validates input but does not send data to a backend.
- GitHub API data depends on public network access and rate limits.
- The presentation video and final slide PDF must still be produced separately before submission.

## 12. Conclusion

The Assignment 4 version completes the incremental portfolio path by preserving the Assignment 3 technical foundation and adding the polish, documentation, and presentation structure needed for the final submission.
