const storageKeys = {
  theme: "portfolio-theme",
  visitorName: "portfolio-visitor-name",
  status: "portfolio-status"
};

const state = {
  theme: localStorage.getItem(storageKeys.theme) || "light",
  visitorName: localStorage.getItem(storageKeys.visitorName) || "",
  availability: localStorage.getItem(storageKeys.status) || "available",
  visitStartedAt: Date.now(),
  search: "",
  category: "all",
  level: "all",
  sortBy: "newest"
};

const projects = [
  {
    title: "Assignment 4 Final Portfolio",
    description: "A polished portfolio application that integrates the Assignment 3 feature set with stronger presentation, documentation, and professional UI decisions.",
    category: "web",
    level: "advanced",
    date: "2026-04-25",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Documentation"],
    evidence: "README.md"
  },
  {
    title: "Assignment 3 Interactive Portfolio",
    description: "The incremental base for this final submission, including persistent state, project filters, GitHub API fetching, and validated contact flow.",
    category: "web",
    level: "advanced",
    date: "2026-04-18",
    stack: ["State Management", "Fetch API", "Form Validation"],
    evidence: "docs/technical-documentation.md"
  },
  {
    title: "Venture Outreach System",
    description: "A structured outreach management concept for tracking contacts, communication stages, and follow-up workflows.",
    category: "systems",
    level: "advanced",
    date: "2026-03-30",
    stack: ["Workflow Design", "Data Modeling", "JavaScript"],
    evidence: "#projects"
  },
  {
    title: "Study Planner Assistant",
    description: "An AI-assisted planning concept that organizes study tasks by urgency, workload, and course priority.",
    category: "ai",
    level: "advanced",
    date: "2026-03-18",
    stack: ["Prompt Design", "Task Logic", "AI Workflow"],
    evidence: "docs/ai-usage-report.md"
  },
  {
    title: "Campus Event Finder",
    description: "A student-focused browsing interface for exploring events with categories, summaries, and practical search behavior.",
    category: "web",
    level: "foundational",
    date: "2026-02-16",
    stack: ["Interaction Design", "Filtering", "Accessibility"],
    evidence: "#projects"
  },
  {
    title: "Technical Documentation Pack",
    description: "A documentation set covering setup, architecture, AI usage, testing, and presentation planning for the final submission.",
    category: "documentation",
    level: "foundational",
    date: "2026-04-25",
    stack: ["README", "Technical Writing", "Manual Testing"],
    evidence: "docs/technical-documentation.md"
  }
];

const fallbackRepositories = [
  {
    name: "202277460-moayd-shahat-assignment4",
    description: "Expected final repository name for the Assignment 4 portfolio submission.",
    language: "HTML/CSS/JavaScript",
    stargazers_count: 0,
    html_url: "#evidence"
  },
  {
    name: "202277460-moayd-shahat-assignment3",
    description: "Incremental base project extended into the final Assignment 4 portfolio.",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "#projects"
  }
];

const elements = {
  themeToggle: document.getElementById("themeToggle"),
  statusToggle: document.getElementById("statusToggle"),
  themeLabel: document.getElementById("themeLabel"),
  statusMessage: document.getElementById("statusMessage"),
  greeting: document.getElementById("greeting"),
  visitTimer: document.getElementById("visitTimer"),
  visitorForm: document.getElementById("visitorForm"),
  visitorNameInput: document.getElementById("visitorName"),
  visitorFeedback: document.getElementById("visitorFeedback"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  levelFilter: document.getElementById("levelFilter"),
  sortSelect: document.getElementById("sortSelect"),
  levelMessage: document.getElementById("levelMessage"),
  visibleProjectCount: document.getElementById("visibleProjectCount"),
  visibleSkillCount: document.getElementById("visibleSkillCount"),
  topMatchLabel: document.getElementById("topMatchLabel"),
  projectsList: document.getElementById("projectsList"),
  repoStatus: document.getElementById("repoStatus"),
  repoList: document.getElementById("repoList"),
  contactForm: document.getElementById("contactForm"),
  formMessage: document.getElementById("formMsg")
};

function applyTheme() {
  const darkMode = state.theme === "dark";
  document.body.classList.toggle("dark", darkMode);
  elements.themeLabel.textContent = darkMode ? "Dark" : "Light";
  elements.themeToggle.setAttribute("aria-pressed", String(darkMode));
  elements.themeToggle.textContent = darkMode ? "Light Theme" : "Dark Theme";
  localStorage.setItem(storageKeys.theme, state.theme);
}

function renderGreeting() {
  const name = state.visitorName.trim();
  elements.greeting.textContent = name
    ? `Welcome, ${name}. This is the final Assignment 4 portfolio.`
    : "Welcome to my final portfolio.";
}

function renderStatus() {
  const available = state.availability === "available";
  elements.statusMessage.textContent = available
    ? "Available for academic and portfolio collaborations."
    : "Focus mode enabled for coursework and final submission review.";
  elements.statusToggle.textContent = available ? "Focus Mode" : "Available Mode";
  elements.statusToggle.setAttribute("aria-pressed", String(!available));
  localStorage.setItem(storageKeys.status, state.availability);
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateTimer() {
  elements.visitTimer.textContent = formatDuration(Date.now() - state.visitStartedAt);
}

function getProjectSearchText(project) {
  return [
    project.title,
    project.description,
    project.category,
    project.level,
    ...project.stack
  ].join(" ").toLowerCase();
}

function getFilteredProjects() {
  const search = state.search.trim().toLowerCase();

  return projects
    .filter((project) => {
      const matchesSearch = search === "" || getProjectSearchText(project).includes(search);
      const matchesCategory = state.category === "all" || project.category === state.category;
      const matchesLevel = state.level === "all" || project.level === state.level;

      return matchesSearch && matchesCategory && matchesLevel;
    })
    .sort((left, right) => {
      if (state.sortBy === "title") {
        return left.title.localeCompare(right.title);
      }

      const leftDate = new Date(left.date).getTime();
      const rightDate = new Date(right.date).getTime();

      return state.sortBy === "oldest" ? leftDate - rightDate : rightDate - leftDate;
    });
}

function renderLevelMessage(filteredProjects) {
  if (state.level === "foundational") {
    elements.levelMessage.textContent =
      "Foundational mode highlights approachable work with clear UI, documentation, and usability goals.";
    return;
  }

  if (state.level === "advanced") {
    elements.levelMessage.textContent =
      "Advanced mode emphasizes projects with heavier JavaScript logic, API usage, and system thinking.";
    return;
  }

  elements.levelMessage.textContent =
    `${filteredProjects.length} project${filteredProjects.length === 1 ? "" : "s"} match the current search and filter choices.`;
}

function renderProjectStats(filteredProjects) {
  const visibleSkills = new Set(filteredProjects.flatMap((project) => project.stack));
  elements.visibleProjectCount.textContent = String(filteredProjects.length);
  elements.visibleSkillCount.textContent = String(visibleSkills.size);
  elements.topMatchLabel.textContent = filteredProjects[0] ? filteredProjects[0].title : "None";
}

function createChip(label) {
  const chip = document.createElement("span");
  chip.className = "project-chip";
  chip.textContent = label;
  return chip;
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();
  elements.projectsList.innerHTML = "";

  renderLevelMessage(filteredProjects);
  renderProjectStats(filteredProjects);

  if (filteredProjects.length === 0) {
    const emptyState = document.createElement("article");
    emptyState.className = "card empty-state";

    const title = document.createElement("h3");
    title.textContent = "No matching projects";

    const copy = document.createElement("p");
    copy.textContent = "Try a different search term, category, or complexity level.";

    emptyState.append(title, copy);
    elements.projectsList.appendChild(emptyState);
    return;
  }

  filteredProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "card project-card";

    const tag = document.createElement("span");
    tag.className = "project-tag";
    tag.textContent = `${project.category.toUpperCase()} - ${project.level}`;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const meta = document.createElement("p");
    meta.className = "project-meta";
    meta.textContent = `Updated ${project.date}`;

    const chips = document.createElement("div");
    chips.className = "project-actions";
    project.stack.forEach((skill) => chips.appendChild(createChip(skill)));

    const evidenceLink = document.createElement("a");
    evidenceLink.className = "repo-link";
    evidenceLink.href = project.evidence;
    evidenceLink.textContent = "View Evidence";

    article.append(tag, title, description, meta, chips, evidenceLink);
    elements.projectsList.appendChild(article);
  });
}

function createRepositoryCard(repo) {
  const article = document.createElement("article");
  article.className = "card repo-card";

  const title = document.createElement("h3");
  title.textContent = repo.name;

  const description = document.createElement("p");
  description.textContent = repo.description || "No description provided for this repository.";

  const meta = document.createElement("p");
  meta.className = "repo-meta";
  meta.textContent = `Stars: ${repo.stargazers_count} - Language: ${repo.language || "Not specified"}`;

  const link = document.createElement("a");
  link.className = "repo-link";
  link.href = repo.html_url;

  if (repo.html_url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  link.textContent = "View Repository";

  article.append(title, description, meta, link);
  return article;
}

function renderRepositories(repositories) {
  elements.repoList.innerHTML = "";
  repositories.forEach((repo) => {
    elements.repoList.appendChild(createRepositoryCard(repo));
  });
}

async function loadRepositories() {
  elements.repoStatus.textContent = "Loading latest repositories from GitHub...";

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch("https://api.github.com/users/swe-moayd/repos?sort=updated&per_page=6", {
      signal: controller.signal,
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const repositories = await response.json();

    if (!Array.isArray(repositories) || repositories.length === 0) {
      elements.repoStatus.textContent = "No public repositories were returned by the API. Showing submission placeholders.";
      renderRepositories(fallbackRepositories);
      return;
    }

    elements.repoStatus.textContent = "Repositories loaded successfully from the GitHub API.";
    renderRepositories(repositories);
  } catch (error) {
    elements.repoStatus.textContent =
      "Unable to load GitHub repositories right now. Showing local submission references instead.";
    renderRepositories(fallbackRepositories);
    console.error("GitHub API error:", error);
  } finally {
    clearTimeout(timeoutId);
  }
}

function setVisitorName(name) {
  state.visitorName = name.trim();
  localStorage.setItem(storageKeys.visitorName, state.visitorName);
  renderGreeting();
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactForm(formData) {
  const errors = [];

  if (!formData.name.trim()) {
    errors.push("Name is required.");
  }

  if (!validateEmail(formData.email.trim())) {
    errors.push("Enter a valid email address.");
  }

  if (!formData.reason) {
    errors.push("Select an inquiry type.");
  }

  if (formData.message.trim().length < 20) {
    errors.push("Message must be at least 20 characters long.");
  }

  return errors;
}

function setFieldErrorState(fieldId, hasError) {
  const field = document.getElementById(fieldId);
  field.classList.toggle("input-error", hasError);
  field.setAttribute("aria-invalid", String(hasError));
}

function syncFormErrorState(formData) {
  setFieldErrorState("name", !formData.name.trim());
  setFieldErrorState("email", !validateEmail(formData.email.trim()));
  setFieldErrorState("reason", !formData.reason);
  setFieldErrorState("message", formData.message.trim().length < 20);
}

function getContactFormData() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    reason: document.getElementById("reason").value,
    message: document.getElementById("message").value
  };
}

function bindEvents() {
  elements.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  elements.statusToggle.addEventListener("click", () => {
    state.availability = state.availability === "available" ? "focus" : "available";
    renderStatus();
  });

  elements.visitorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = elements.visitorNameInput.value;

    if (!name.trim()) {
      elements.visitorFeedback.textContent = "Enter a name before saving your personalized greeting.";
      return;
    }

    setVisitorName(name);
    elements.visitorFeedback.textContent = `Saved locally for this browser: ${state.visitorName}.`;
    elements.visitorForm.reset();
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProjects();
  });

  elements.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderProjects();
  });

  elements.levelFilter.addEventListener("change", (event) => {
    state.level = event.target.value;
    renderProjects();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderProjects();
  });

  elements.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = getContactFormData();
    const errors = validateContactForm(formData);
    syncFormErrorState(formData);

    if (errors.length > 0) {
      elements.formMessage.textContent = errors.join(" ");
      return;
    }

    elements.formMessage.textContent =
      `Thanks ${formData.name.trim()}, your ${formData.reason} message passed validation.`;
    elements.contactForm.reset();
    ["name", "email", "reason", "message"].forEach((fieldId) => setFieldErrorState(fieldId, false));
  });
}

function initialize() {
  elements.visitorNameInput.value = state.visitorName;
  bindEvents();
  applyTheme();
  renderGreeting();
  renderStatus();
  renderProjects();
  loadRepositories();
  updateTimer();

  setInterval(updateTimer, 1000);
}

initialize();
