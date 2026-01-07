async function generateSkillMap() {
  const goal = document.getElementById("goal").value;
  const resume = document.getElementById("resume").value;
  const output = document.getElementById("output");

  output.innerHTML = "<p>Analyzing your skills…</p>";

  try {
    const res = await fetch("/skillmap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal, resume })
    });

    const data = await res.json();

    const current = data.current_skills || [];
    const missing = data.missing_skills || [];
    const plan = data.plan || [];

    output.innerHTML = `
      <div class="card">
        <h2>Current Skills</h2>
        <ul>${current.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>

      <div class="card">
        <h2>Skills to Learn</h2>
        <ul>${missing.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>

      <div class="card">
        <h2>30-Day Learning Plan</h2>
        <ol>${plan.map(p => `<li>${p}</li>`).join("")}</ol>
      </div>
    `;
  } catch (err) {
    console.error(err);
    output.innerHTML = "<p>Something went wrong. Please try again.</p>";
  }
}
