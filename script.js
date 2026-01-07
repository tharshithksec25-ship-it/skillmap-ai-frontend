// ================================
// HARD BIND BUTTON ON PAGE LOAD
// ================================
document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector("button");
  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");

  if (!button || !skillsInput || !goalInput) {
    console.error("Required elements not found");
    return;
  }

  button.addEventListener("click", generateSkillMap);
});

// ================================
// CORE FUNCTION (AI LOGIC)
// ================================
function generateSkillMap() {

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Please enter skills and target role");
    return;
  }

  // ---------- RESULT CONTAINER ----------
  let result = document.querySelector(".result");

  if (!result) {
    result = document.createElement("div");
    result.className = "result";

    const button = document.querySelector("button");
    button.insertAdjacentElement("afterend", result);
  }

  // ---------- AI SKILL MAP ----------
  const roleSkills = {
    "AI Engineer": [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Linear Algebra",
      "Statistics",
      "Projects",
      "Deployment"
    ],
    "Web Developer": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "APIs",
      "Hosting"
    ],
    "Product Manager": [
      "Roadmapping",
      "User Research",
      "Analytics",
      "Communication",
      "Execution"
    ]
  };

  const userSkills = skills.toLowerCase().split(",").map(s => s.trim());
  const expected = roleSkills[goal] || roleSkills["AI Engineer"];

  const missing = expected.filter(
    skill => !userSkills.some(u => u.includes(skill.toLowerCase()))
  );

  // ---------- RENDER ----------
  result.innerHTML = `
    <h2>SkillMap AI</h2>

    <p><strong>Target Role:</strong> ${goal}</p>

    <h3>Missing Skills</h3>
    <ul>
      ${
        missing.length
          ? missing.map(m => `<li>${m}</li>`).join("")
          : "<li>No major gaps found 🎯</li>"
      }
    </ul>

    <h3>Learning Roadmap</h3>
    <ol>
      <li>Learn fundamentals</li>
      <li>Build real-world projects</li>
      <li>Apply & iterate</li>
    </ol>
  `;
}
