const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Load preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("darkMode", "enabled");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("darkMode", "disabled");
  }
});
