// Day/Night Mode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
  document.body.classList.toggle("light", !themeToggle.checked);
  localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
});
