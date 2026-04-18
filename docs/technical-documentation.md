# Technical Documentation

## 1. Overview

This project is a static single-page portfolio web application built with HTML, CSS, and vanilla JavaScript. It was designed to satisfy Assignment 3 requirements by combining application state, external API usage, conditional rendering, validation logic, and responsive interface behavior.

## 2. Architecture

The project is intentionally small and dependency-free.

- `index.html` defines the semantic structure and all user-facing sections.
- `css/styles.css` provides layout, theme tokens, responsive rules, and accessibility-oriented styling.
- `js/script.js` manages application state, rendering, events, validation, and API calls.
- `docs/ai-usage-report.md` documents how AI tools were used and reviewed.

## 3. Core Features

### 3.1 Persistent State

The application stores selected values in `localStorage`:

- theme preference
- visitor name
- availability status

These values are restored on page load through the `state` object and applied during initialization.

### 3.2 Dynamic Filtering and Sorting

The projects section supports multiple client-side operations:

- text search by project title and stack
- category filtering
- visitor-level filtering
- sorting by date or title

The filtering logic is centralized in `getFilteredProjects()` so the rendered project list always matches current UI state.

### 3.3 Conditional UI Messaging

The application changes explanatory text depending on the visitor level selection. This demonstrates conditional rendering beyond simple show/hide behavior and ties the UI to the active state model.

### 3.4 GitHub API Integration

The application fetches public repositories from the GitHub REST API using `fetch()`.

Implementation details:

- the request is limited to six repositories
- the request includes an `Accept` header
- an `AbortController` cancels the request after six seconds
- loading, empty, success, and error states are handled explicitly in the UI

### 3.5 Contact Form Validation

The contact form checks several rules before reporting success:

- name must not be empty
- email must match a valid pattern
- inquiry type must be selected
- message must contain at least 20 characters

Invalid fields are marked with `aria-invalid="true"` and a visual error state so feedback is clearer to both users and graders.

## 4. Accessibility Considerations

The project includes several accessibility improvements:

- semantic landmarks such as `header`, `main`, `section`, and `footer`
- associated labels for form controls
- live regions for validation and API status messages
- visible keyboard focus styles
- `aria-pressed` state for toggle buttons
- reduced-motion support through `prefers-reduced-motion`

## 5. Code Quality Decisions

Several implementation choices were made to strengthen maintainability:

- state is grouped in a single object instead of being scattered across handlers
- rendering logic is separated into focused functions such as `renderGreeting()`, `renderStatus()`, and `renderProjects()`
- API and project cards are built with DOM methods instead of raw HTML injection for safer rendering
- constants are used for storage keys and project data

## 6. Performance Notes

The project is lightweight by design:

- no external frameworks or build tools
- one stylesheet and one script file
- no heavy images or third-party UI libraries
- limited API payload size
- timeout protection prevents hanging network requests

For a small coursework portfolio, this keeps initial loading fast and predictable.

## 7. Browser Compatibility

The project targets modern browsers that support:

- `fetch`
- `localStorage`
- `AbortController`
- CSS Grid
- `classList`

It is expected to work well in current Chrome, Edge, Firefox, and Safari releases on desktop and mobile.

## 8. Manual Verification Checklist

The following checks should be performed before submission:

1. Load the page and confirm all sections render correctly.
2. Toggle theme and confirm the choice persists after reload.
3. Save a visitor name and confirm the greeting updates.
4. Toggle availability status and confirm the button text and status text update.
5. Test search, category filter, level filter, and sort order together.
6. Confirm empty-state rendering appears when filters remove all projects.
7. Validate the contact form with invalid data and then valid data.
8. Test the GitHub repository section with normal network conditions.
9. Test the GitHub repository section with the network disabled to confirm fallback behavior.
10. Resize the page to mobile width and confirm controls stack cleanly.

## 9. Conclusion

This project demonstrates a clear upgrade from a basic portfolio into a more interactive web application. It shows state persistence, structured JavaScript logic, API consumption, responsive design, validation, accessibility improvements, and complete supporting documentation, which are the key qualities expected for a high-scoring Assignment 3 submission.
