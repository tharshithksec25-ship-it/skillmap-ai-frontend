async function generateSkillMap() {
  const goalInput = document.getElementById("goal");
  const resumeInput = document.getElementById("resume");
  const resultDiv = document.getElementById("result");

  const goal = goalInput.value.trim();
  const resume = resumeInput.value.trim();

  if (!goal || !resume) {
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = "<p>Please enter both a goal and resume.</p>";
    return;
  }

  // Loading state
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "<p>Analyzing your skills…</p>";

  try {
    const response = await fetch(
      "https://skillmapai-epbzdggxdnfkgthn.centralindia-01.azurewebsites.net/skillmap",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          goal: goal,
          resume: resume
        })
      }
    );

    if (!response.ok) {
      throw new Error("Backend error");
    }

    const data = await response.json();

    // Render output cleanly
    resultDiv.innerHTML = `
      <h2>Skill Map for ${data.goal}</h2>

      <h3>Missing Skills</h3>
      <ul>
        ${data.missing_skills.map(skill => `<li>${skill}</li>`).join("")}
      </ul>

      <h3>Learning Plan</h3>
      <ul>
        ${data.learning_plan.map(step => `<li>${step}</li>`).join("")}
      </ul>
    `;
  } catch (error) {
    resultDiv.innerHTML = `
      <p>Something went wrong. Please try again.</p>
    `;
  }
}
