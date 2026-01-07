document.addEventListener("DOMContentLoaded", () => {
  console.log("SkillMap JS loaded");

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");
  const button = document.getElementById("generateBtn");

  if (!skillsInput || !goalInput || !button) {
    console.error("Missing required DOM elements");
    return;
  }

  button.addEventListener("click", () => {
    console.log("Generate button clicked");

    const skills = skillsInput.value.trim();
    const goal = goalInput.value.trim();

    if (!skills || !goal) {
      alert("Please enter your skills and target role");
      return;
    }

    let result = document.getElementById("result");

    if (!result) {
      result = document.createElement("div");
      result.id = "result";
      result.style.marginTop = "40px";
      result.style.color = "#ffffff";
      button.parentNode.appendChild(result);
    }

    const roleSkills = {
      "AI Engineer": [
        "Python",
        "Data Structures",
        "Linear Algebra",
        "Probability",
        "Machine Learning",
        "Deep Learning",
        "PyTorch",
        "MLOps"
      ],
      "Product Manager": [
        "User Research",
        "Product Strategy",
        "Roadmapping",
        "Analytics",
        "Stakeholder Management"
      ]
    };

    const requiredSkills = roleSkills[goal] || [];
    const missingSkills = requiredSkills.filter(
      s => !skills.toLowerCase().includes(s.toLowerCase())
    );

    result.innerHTML = `
      <h2>Your Skill Map</h2>
      <p><strong>Target Role:</strong> ${goal}</p>

      <h3>Missing Skills</h3>
      ${
        missingSkills.length
          ? `<ul>${missingSkills.map(s => `<li>${s}</li>`).join("")}</ul>`
          : `<p>You already have the core skills 🎉</p>`
      }

      <h3>Learning Roadmap</h3>
      <ol>
        ${missingSkills.map(s => `<li>Learn ${s}</li>`).join("")}
      </ol>
    `;

    result.scrollIntoView({ behavior: "smooth" });
  });
});
