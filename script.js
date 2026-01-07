document.addEventListener("DOMContentLoaded", () => {
  console.log("SkillMap JS loaded");

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");
  const button = document.querySelector("button");

  if (!skillsInput || !goalInput || !button) {
    console.error("Required elements not found");
    return;
  }

  button.addEventListener("click", () => {
    console.log("Button clicked");

    const skills = skillsInput.value.trim();
    const goal = goalInput.value.trim();

    if (!skills || !goal) {
      alert("Enter skills and target role");
      return;
    }

    let result = document.querySelector(".result");

    if (!result) {
      result = document.createElement("div");
      result.className = "result";
      result.style.marginTop = "40px";
      result.style.color = "#fff";
      button.after(result);
    }

    const roleSkills = {
      "AI Engineer": [
        "Python",
        "Data Structures",
        "Linear Algebra",
        "Machine Learning",
        "Deep Learning",
        "PyTorch",
        "MLOps"
      ],
      "Product Manager": [
        "User Research",
        "Roadmapping",
        "Analytics",
        "Stakeholder Management"
      ]
    };

    const required = roleSkills[goal] || [];
    const missing = required.filter(
      s => !skills.toLowerCase().includes(s.toLowerCase())
    );

    result.innerHTML = `
      <h2>Your Skill Map</h2>
      <p><strong>Target Role:</strong> ${goal}</p>

      <h3>Missing Skills</h3>
      <ul>${missing.map(m => `<li>${m}</li>`).join("")}</ul>

      <h3>Roadmap</h3>
      <ol>${missing.map(m => `<li>Learn ${m}</li>`).join("")}</ol>
    `;

    result.scrollIntoView({ behavior: "smooth" });
  });
});
