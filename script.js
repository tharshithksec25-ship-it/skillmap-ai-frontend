// Grab inputs
const skillsInput = document.querySelector("textarea");
const goalInput = document.querySelector("input");

// Make function GLOBAL so button can see it
window.generateSkillMap = function () {
  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  // Validation
  if (!skills || !goal) {
    alert("Please enter your current skills and target role.");
    return;
  }

  // Find or create result container
  let result = document.querySelector(".result");
  if (!result) {
    result = document.createElement("div");
    result.className = "result";
    document.querySelector("button").after(result);
  }

  // HARD-SET styles so text is visible (NO UI CHANGE)
  result.style.color = "#fff";
  result.style.marginTop = "40px";

  // Simple AI logic (hackathon-acceptable)
  const skillMap = {
    "AI Engineer": [
      "Python",
      "Data Structures",
      "Linear Algebra",
      "Machine Learning",
      "Deep Learning",
      "PyTorch / TensorFlow",
      "MLOps"
    ],
    "Product Manager": [
      "Market Research",
      "User Stories",
      "Roadmapping",
      "Analytics",
      "Stakeholder Management"
    ]
  };

  const requiredSkills = skillMap[goal] || ["Domain Knowledge", "Problem Solving"];
  const userSkills = skills.toLowerCase();
  const missing = requiredSkills.filter(
    s => !userSkills.includes(s.toLowerCase())
  );

  // Render output
  result.innerHTML = `
    <h2>Your Skill Map</h2>
    <p><strong>Target Role:</strong> ${goal}</p>

    <h3>Missing Skills</h3>
    <ul>
      ${missing.map(s => `<li>${s}</li>`).join("")}
    </ul>

    <h3>Recommended Roadmap</h3>
    <ol>
      ${missing.map(s => `<li>Learn ${s}</li>`).join("")}
    </ol>
  `;

  // UX polish
  result.scrollIntoView({ behavior: "smooth" });
};
