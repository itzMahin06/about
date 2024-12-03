// Day/Night Mode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
  document.body.classList.toggle("light", !themeToggle.checked);
  localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
});

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(savedTheme);
themeToggle.checked = savedTheme === "dark";

// Visit Counter using GitHub API
async function updateVisitCount() {
  const counterSpan = document.getElementById("visit-count");
  const username = "itzmahin06";
  const repo = "about";
  const filePath = "visit-counter.json";
  const token = "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"; // Use a token with repo scope

  try {
    // Fetch file content
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${filePath}`, {
      headers: { Authorization: `token ${token}` }
    });
    const data = await response.json();
    const decodedContent = JSON.parse(atob(data.content));

    // Update visit count
    const newCount = decodedContent.visits + 1;
    decodedContent.visits = newCount;

    // Push updated content to GitHub
    await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${filePath}`, {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Update visit counter",
        content: btoa(JSON.stringify(decodedContent)),
        sha: data.sha
      })
    });

    // Update UI
    counterSpan.textContent = newCount;
  } catch (error) {
    console.error("Error updating visit count:", error);
    counterSpan.textContent = "Error";
  }
}

updateVisitCount();
