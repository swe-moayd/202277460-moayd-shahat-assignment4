# Technical Documentation

## Overview

This portfolio is a static single-page web application built with HTML, CSS, and vanilla JavaScript. The application focuses on Assignment 3 requirements by combining API integration, client-side state management, conditional rendering, form validation, and responsive styling.

## Main Features

### 1. API Integration

- The portfolio fetches live repositories from the GitHub public API.
- The request is performed using `fetch()` with an `AbortController` timeout.
- If the request fails or the response is invalid, the application shows a user-friendly fallback message.

### 2. Complex Logic

- The project list supports:
  - Text search
  - Category filtering
  - Experience-level filtering
  - Sorting by newest, oldest, or title
- The interface also changes the recommendation message based on the selected visitor level.
- The contact form validates multiple conditions before submission:
  - Name must not be empty
  - Email must match a valid format
  - Inquiry type must be selected
  - Message must contain at least 20 characters

### 3. State Management

The application manages and updates several pieces of client-side state:

- Theme preference
- Visitor name
- Availability/focus mode
- Session start time
- Current project filters and sorting selections

Persistent state is stored with `localStorage` so that theme, visitor name, and status remain available across page reloads.

### 4. Performance Considerations

- The project uses a small file structure with no heavy dependencies.
- Styling and script logic are written in plain CSS and vanilla JavaScript to avoid unnecessary framework overhead.
- The page has no large image assets that would slow down loading.
- The GitHub API request is limited to six repositories to reduce response size.
- Timeout handling prevents the interface from waiting indefinitely for the API.

### 5. Compatibility

- The project is designed for modern desktop and mobile browsers.
- Layouts use responsive CSS grid and flexible spacing for smaller screens.
- Standard web APIs are used: `fetch`, `localStorage`, `setInterval`, and DOM event listeners.

## File Responsibilities

- `index.html`: semantic page structure and all application sections
- `css/styles.css`: responsive layout, theme tokens, and visual styling
- `js/script.js`: application state, rendering logic, API integration, timer, and form validation
- `docs/ai-usage-report.md`: AI usage documentation required by the assignment

## Testing and Verification

The following manual checks should be completed in the browser:

1. Confirm the theme toggle updates the page and remains saved after reload.
2. Save a visitor name and confirm the greeting changes after reload.
3. Toggle status and verify the message changes correctly.
4. Test project search, category filter, level filter, and sorting combinations.
5. Disconnect the network or force an invalid API request to verify the GitHub error message.
6. Submit the contact form with invalid data and confirm validation messages appear.
7. Resize the browser window to verify responsive layout behavior.

## Suggested Submission Improvement

The local folder currently still uses the Assignment 2 directory name. For final submission, the GitHub repository should be renamed to:

`202277460-moayd-shahat-assignment3`
