async function generateSkillMap() {
  const skills = document.getElementById("skillsInput").value.trim();
  const goal = document.getElementById("goalInput").value.trim();
  const resultBox = document.getElementById("result");

  if (!skills || !goal) {
    resultBox.innerHTML = "<p>Please fill in both fields.</p>";
    return;
  }

  resultBox.innerHTML = "<p>Generating your skill map...</p>";

  try {
    // 👇 USE GET (FIXES 405)
    const url = `/skillmap?skills=${encodeURIComponent(skills)}&goal=${encodeURIComponent(goal)}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    // ultra-simple render
    resultBox.innerHTML = `
      <h3>Your Skill Map</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  } catch (err) {
    console.error(err);
    resultBox.innerHTML = "<p>Something went wrong. Try again.</p>";
  }
}
