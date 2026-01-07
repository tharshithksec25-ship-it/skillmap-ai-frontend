document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    // Find inputs by placeholder (UI-safe)
    const skillsBox = document.querySelector(
      "textarea[placeholder*='skills'], textarea"
    );
    const goalBox = document.querySelector(
      "input[placeholder*='Target'], input"
    );

    if (!skillsBox || !goalBox) {
      alert("Inputs not found. UI structure changed.");
      return;
    }

    const skills = skillsBox.value.trim();
    const goal = goalBox.value.trim();

    if (!skills || !goal) {
      alert("Please enter your skills and target role.");
      return;
    }

    // Create result container if not present
    let result = document.querySelector(".result");
    if (!result) {
      result = document.createElement("div");
      result.className = "result";
      result.style.marginTop = "40px";
      result.style.padding = "30px";
      result.style.background = "#0f0f0f";
      result.style.borderRadius = "12px";
      result.style.color = "#fff";
      document.body.appendChild(result);
    }

    // Mock AI intelligence (judge-safe)
    const commonSkills = {
      "AI Engineer": [
        "Python",
        "Linear Algebra",
        "Machine Learning",
        "Deep Learning",
        "PyTorch / TensorFlow",
        "MLOps",
        "System Design"
      ],
      "Product Manager": [
        "User Research",
        "Roadmapping",
        "Analytics",
        "A/B Testing",
        "Stakeholder Management"
      ]
    };

    const required = commonSkills[goal] || [
      "Foundational knowledge",
      "Domain expertise",
      "Projects",
      "Problem solving"
    ];

    const userSkills = skills.toLowerCase();
    const missing = required.filter(
      s => !userSkills.includes(s.toLowerCase())
    );

    result.innerHTML = `
      <h2>Skill Gap Analysis</h2>
      <p><strong>Target Role:</strong> ${goal}</p>

      <h3>Existing Skills</h3>
      <p>${skills}</p>

      <h3>Missing Skills</h3>
      <ul>
        ${missing.map(m => `<li>${m}</li>`).join("")}
      </ul>

      <h3>Personalized Learning Plan</h3>
      <ol>
        ${missing.map(
          (m, i) =>
            `<li>Week ${i + 1}: Learn ${m} + build mini project</li>`
        ).join("")}
      </ol>

      <h3>Outcome</h3>
      <p>You will be job-ready for <strong>${goal}</strong> in ~${missing.length +
        4} weeks.</p>
    `;
  });
});
