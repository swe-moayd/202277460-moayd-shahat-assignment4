# Assignment 4 Demo Script

Target length: 5-7 minutes.

## 0:00-1:00 Introduction

Hello, my name is Moayd Shahat. This is my final Assignment 4 portfolio web application. The project is an incremental upgrade from Assignment 3, so I kept the previous technical foundation and improved it into a more complete and professional portfolio.

The main goal is to demonstrate the course concepts together: responsive design, JavaScript state, API integration, filtering and sorting logic, form validation, documentation, and responsible AI use.

## 1:00-2:00 Interface Overview

The first screen shows the final portfolio hero section with a generated workspace image, clear navigation, and direct links to projects and contact.

The navigation moves to the main sections: About, Projects, GitHub, Contact, and Evidence. The top controls let a visitor switch theme and availability status.

This page is responsive, so the content stacks cleanly on smaller screens while keeping the same features available.

## 2:00-3:30 Feature Demonstration

First, I will toggle the theme. The selected theme is saved in local storage, so it remains after reload.

Next, I will enter a visitor name. The greeting updates and the name is saved locally in the browser.

The status button switches between available mode and focus mode. This also persists in local storage.

In the Projects section, I can search by text, filter by category, filter by complexity, and sort the results. The visible project count, skill count, and top match update automatically.

## 3:30-4:30 API and Validation

The GitHub section fetches recent public repositories using the GitHub REST API. The implementation includes loading, success, empty, and error states. If the API is unavailable, the page shows fallback repository references instead of looking broken.

The Contact section validates the form before submission. It checks required name, valid email, selected inquiry type, and message length. Invalid fields are highlighted and the feedback message explains what needs to be fixed.

## 4:30-5:45 Technical Deep Dive

The JavaScript uses one central state object for theme, visitor name, availability, timer, search, filters, and sorting.

The project cards are generated dynamically from a structured data array. The filtering and sorting are handled in `getFilteredProjects()`, which keeps the cards and statistics consistent.

The API request uses `fetch()` and `AbortController`, so slow requests do not hang forever.

The CSS uses variables for the visual system and media queries for responsive behavior. Accessibility improvements include semantic HTML, a skip link, labels, visible focus states, live regions, and `aria-invalid` for form errors.

## 5:45-6:30 Documentation and AI Use

The Evidence section links to the README, technical documentation, user guide, AI usage report, rubric evidence, submission checklist, and presentation plan.

AI tools were used for planning, code support, debugging, documentation drafting, and generating the hero image. All AI output was reviewed, modified, and tested before inclusion. The details are documented in `docs/ai-usage-report.md`.

## 6:30-7:00 Conclusion

In conclusion, this final portfolio brings together the Assignment 3 technical base and the Assignment 4 polish requirements. It is a complete static web application with interactive features, API integration, validation, responsive design, documentation, and presentation support.

Future improvements could include a backend contact endpoint, more detailed project case studies, and adding the final live deployment link after publishing.
