// Day/Night Mode with Emoji Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

themeToggle.addEventListener("change", () => {
  const isDarkMode = themeToggle.checked;
  document.body.classList.toggle("dark", isDarkMode);
  document.body.classList.toggle("light", !isDarkMode);

  // Update emoji
  themeLabel.textContent = isDarkMode ? "🌙" : "🌞";

  // Save mode in localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(savedTheme);
themeToggle.checked = savedTheme === "dark";
themeLabel.textContent = savedTheme === "dark" ? "🌙" : "🌞";
