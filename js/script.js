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
    title: "Outreach System",
    description: "A structured management platform for tracking outreach workflows and student engagement.",
    category: "systems",
    level: "advanced",
    date: "2025-03-08",
    stack: ["JavaScript", "Data Modeling"]
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal website focused on usability, accessibility, and iterative UI refinement.",
    category: "web",
    level: "beginner",
    date: "2025-11-12",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Campus Event Finder",
    description: "A web interface for browsing student events with filtering and location-aware summaries.",
    category: "web",
    level: "beginner",
    date: "2025-09-20",
    stack: ["Web UI", "Interaction Design"]
  },
  {
    title: "Study Planner Assistant",
    description: "An AI-assisted planner concept that prioritizes study tasks based on urgency and course weight.",
    category: "ai",
    level: "advanced",
    date: "2025-10-03",
    stack: ["Prompt Design", "Workflow Logic"]
  }
];

const themeToggle = document.getElementById("themeToggle");
const statusToggle = document.getElementById("statusToggle");
const themeLabel = document.getElementById("themeLabel");
const statusMessage = document.getElementById("statusMessage");
const greeting = document.getElementById("greeting");
const visitorTimer = document.getElementById("visitTimer");
const visitorForm = document.getElementById("visitorForm");
const visitorNameInput = document.getElementById("visitorName");
const visitorFeedback = document.getElementById("visitorFeedback");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const levelFilter = document.getElementById("levelFilter");
const sortSelect = document.getElementById("sortSelect");
const levelMessage = document.getElementById("levelMessage");
const projectsList = document.getElementById("projectsList");
const repoStatus = document.getElementById("repoStatus");
const repoList = document.getElementById("repoList");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMsg");

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
  themeLabel.textContent = state.theme === "dark" ? "Dark" : "Light";
  localStorage.setItem(storageKeys.theme, state.theme);
}

function renderGreeting() {
  const name = state.visitorName.trim();
  greeting.textContent = name
    ? `Welcome, ${name}. Explore the upgraded assignment 3 portfolio.`
    : "Welcome to my portfolio.";
}

function renderStatus() {
  const available = state.availability === "available";
  statusMessage.textContent = available
    ? "Current status: Available for academic and portfolio collaborations."
    : "Current status: Focus mode enabled for coursework and project delivery.";
  statusToggle.textContent = available ? "Set Focus Mode" : "Set Available";
  localStorage.setItem(storageKeys.status, state.availability);
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateTimer() {
  visitorTimer.textContent = formatDuration(Date.now() - state.visitStartedAt);
}

// Combine search, filters, and sorting in one place so the rendered list always matches UI state.
function getFilteredProjects() {
  const search = state.search.trim().toLowerCase();

  return projects
    .filter((project) => {
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(search) ||
        project.stack.some((item) => item.toLowerCase().includes(search));
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

function renderLevelMessage() {
  if (state.level === "beginner") {
    levelMessage.textContent = "Beginner mode highlights approachable projects with simpler scope and clear UI goals.";
    return;
  }

  if (state.level === "advanced") {
    levelMessage.textContent = "Advanced mode emphasizes projects with heavier logic, system thinking, and AI-oriented workflows.";
    return;
  }

  levelMessage.textContent = "Select a visitor level to change the explanation and narrow the project recommendations.";
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();
  projectsList.innerHTML = "";

  renderLevelMessage();

  if (filteredProjects.length === 0) {
    projectsList.innerHTML = `
      <article class="card empty-state">
        <h3>No matching projects</h3>
        <p>Try a different search term, category, or experience level.</p>
      </article>
    `;
    return;
  }

  filteredProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "card project-card";
    article.innerHTML = `
      <span class="project-tag">${project.category.toUpperCase()} • ${project.level}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p class="project-meta">Updated ${project.date} • Skills: ${project.stack.join(", ")}</p>
    `;
    projectsList.appendChild(article);
  });
}

// Fetch a small, recent repository list and fall back cleanly if the API is unavailable.
async function loadRepositories() {
  repoStatus.textContent = "Loading latest repositories...";

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
    repoList.innerHTML = "";

    if (!Array.isArray(repositories) || repositories.length === 0) {
      repoStatus.textContent = "No public repositories were returned by the API.";
      return;
    }

    repoStatus.textContent = "Repositories loaded successfully from GitHub.";

    repositories.forEach((repo) => {
      const article = document.createElement("article");
      article.className = "card repo-card";
      article.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided for this repository."}</p>
        <p class="repo-meta">Stars: ${repo.stargazers_count} • Language: ${repo.language || "Not specified"}</p>
        <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noreferrer">View Repository</a>
      `;
      repoList.appendChild(article);
    });
  } catch (error) {
    repoList.innerHTML = "";
    repoStatus.textContent = "Unable to load GitHub repositories right now. Please try again later.";
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

// Validate several fields together to demonstrate multi-step form logic.
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

themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
});

statusToggle.addEventListener("click", () => {
  state.availability = state.availability === "available" ? "focus" : "available";
  renderStatus();
});

visitorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = visitorNameInput.value;

  if (!name.trim()) {
    visitorFeedback.textContent = "Enter a name before saving your personalized greeting.";
    return;
  }

  setVisitorName(name);
  visitorFeedback.textContent = `Saved locally for this browser: ${state.visitorName}.`;
  visitorForm.reset();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProjects();
});

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderProjects();
});

levelFilter.addEventListener("change", (event) => {
  state.level = event.target.value;
  renderProjects();
});

sortSelect.addEventListener("change", (event) => {
  state.sortBy = event.target.value;
  renderProjects();
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    reason: document.getElementById("reason").value,
    message: document.getElementById("message").value
  };

  const errors = validateContactForm(formData);

  if (errors.length > 0) {
    formMessage.textContent = errors.join(" ");
    return;
  }

  formMessage.textContent = `Thanks ${formData.name.trim()}, your ${formData.reason} message passed validation.`;
  contactForm.reset();
});

function initialize() {
  visitorNameInput.value = state.visitorName;
  applyTheme();
  renderGreeting();
  renderStatus();
  renderProjects();
  loadRepositories();
  updateTimer();

  setInterval(updateTimer, 1000);
}

initialize();
