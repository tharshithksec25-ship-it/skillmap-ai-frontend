async function generateSkillMap() {
  const skills = document.querySelector("textarea").value.trim();
  const goal = document.querySelector("input").value.trim();
  const resultBox = document.getElementById("result");

  // Safety check (prevents crash)
  if (!resultBox) {
    alert("Result container not found in HTML");
    return;
  }

  if (!skills || !goal) {
    resultBox.innerHTML = "Please enter your skills and goal.";
    return;
  }

  resultBox.innerHTML = "Generating your skill map...";

  try {
    const response = await fetch("/skillmap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        resume: skills,
        goal: goal
      })
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    resultBox.innerHTML = `
      <h3>Your Personalized Skill Map</h3>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  } catch (err) {
    resultBox.innerHTML = "Something went wrong. Please try again.";
    console.error(err);
  }
}
