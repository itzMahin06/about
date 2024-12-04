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

// Translator Button
const translateButton = document.getElementById("translate-button");
const translatableElements = document.querySelectorAll("[data-en][data-bn]");

let currentLanguage = "bn"; // Default language is Bangla

translateButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "bn" ? "en" : "bn";

  // Update text for all translatable elements
  translatableElements.forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLanguage}`);
  });

  // Update button text
  translateButton.textContent = currentLanguage === "bn" ? "EN" : "BN";

  // Save the current language to localStorage
  localStorage.setItem("language", currentLanguage);
});

// Apply saved language on page load
const savedLanguage = localStorage.getItem("language") || "bn";
currentLanguage = savedLanguage;
translatableElements.forEach((el) => {
  el.textContent = el.getAttribute(`data-${currentLanguage}`);
});
translateButton.textContent = currentLanguage === "bn" ? "EN" : "BN";

// JavaScript
document.getElementById('printButton').addEventListener('click', function () {
  window.print();
});

