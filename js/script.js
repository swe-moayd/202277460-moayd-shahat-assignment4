
// THEME (localStorage)
const btn = document.getElementById("themeToggle");
btn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark"));
};
if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
}

// PROJECT DATA
const projects = [
  {title:"Outreach System", desc:"Management system"},
  {title:"Portfolio Website", desc:"Personal website"}
];

const list = document.getElementById("projectsList");

function display(data){
  list.innerHTML = "";
  if(data.length === 0){
    list.innerHTML = "<p>No projects found</p>";
    return;
  }
  data.forEach(p=>{
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    list.appendChild(div);
  });
}
display(projects);

// SEARCH FILTER (dynamic feature)
document.getElementById("searchInput").addEventListener("input", e=>{
  const value = e.target.value.toLowerCase();
  const filtered = projects.filter(p=>p.title.toLowerCase().includes(value));
  display(filtered);
});

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;
  const out = document.getElementById("formMsg");

  if(!name || !email || !msg){
    out.textContent = "Please fill all fields!";
    return;
  }
  out.textContent = "Message sent successfully!";
});
