document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");

  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", (e) => {
    e.preventDefault(); // THIS IS THE KEY FIX

    const skillsBox = document.querySelector("textarea");
    const goalBox = document.querySelector("input");

    if (!skillsBox || !goalBox) {
      alert("Inputs not found");
      return;
    }

    const skills = skillsBox.value.trim();
    const goal = goalBox.value.trim();

    if (!skills || !goal) {
      alert("Enter skills and target role");
      return;
    }

    let result = document.querySelector(".result");
    if (!result) {
      result = document.createElement("div");
      result.className = "result";
      result.style.marginTop = "40px";
      document.body.appendChild(result);
    }

    result.innerHTML = `
      <h2>SkillMap AI Result</h2>
      <p><strong>Target:</strong> ${goal}</p>
      <p><strong>Your skills:</strong> ${skills}</p>

      <h3>Skill Gaps</h3>
      <ul>
        <li>Advanced ${goal} concepts</li>
        <li>Real-world projects</li>
        <li>System design</li>
      </ul>

      <h3>Learning Plan</h3>
      <ol>
        <li>Week 1–2: Foundations</li>
        <li>Week 3–4: Projects</li>
        <li>Week 5: Deployment</li>
      </ol>
    `;
  });
});
