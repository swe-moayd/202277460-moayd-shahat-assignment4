# User Guide

## Purpose

This portfolio is the final Assignment 4 web application. It is designed for visitors, peers, and graders to review Moayd Shahat's skills, projects, documentation, and technical implementation.

## How to Use the Portfolio

1. Start at the hero section to understand the purpose of the portfolio.
2. Use the navigation bar to move between About, Projects, GitHub, Contact, and Evidence.
3. Use the theme button to switch between light and dark mode.
4. Use the status button to switch between available mode and focus mode.
5. Enter a visitor name in the Personalize section to update the greeting.
6. Search and filter projects in the Projects section.
7. Review live or fallback repository data in the GitHub section.
8. Use the contact form to test validation behavior.
9. Open the Evidence links to review the README, technical documentation, AI report, and presentation plan.

## Project Filters

The Projects section includes four controls:

- Search Projects: searches title, description, category, complexity, and skills.
- Category: narrows projects to web, AI, systems, or documentation.
- Complexity: filters by foundational or advanced work.
- Sort By: orders projects by newest, oldest, or title.

The visible project count, skill count, and top match update automatically.

## Contact Form Validation

The form checks:

- name is not empty
- email has a valid format
- inquiry type is selected
- message has at least 20 characters

If a rule fails, the relevant field is highlighted and a message explains the issue.

## Troubleshooting

If GitHub repositories do not load, the site displays local fallback repository references. This is expected when the network is unavailable, the GitHub API is rate limited, or the browser blocks the request.

If theme or visitor name values seem old, clear the browser's local storage for the site and reload.
