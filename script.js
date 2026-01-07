// ===== FORCE FUNCTION TO BE GLOBAL =====
window.generateSkillMap = function () {

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");

  if (!skillsInput || !goalInput) {
    alert("Inputs not found");
    return;
  }

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Enter skills and target role");
    return;
  }

  // ----- RESULT CONTAINER -----
  let result = document.querySelector(".result");

  if (!result) {
    result = document.createElement("div");
    result.className = "result";

    const button = document.querySelector("button");
    button.insertAdjacentElement("afterend", result);
  }

  // ----- AI LOGIC -----
  const roleMap = {
    "AI Engineer": [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Math",
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
    ]
  };

  const userSkills = skills.toLowerCase().split(",").map(s => s.trim());
  const expected = roleMap[goal] || roleMap["AI Engineer"];

  const missing = expected.filter(
    s => !userSkills.some(u => u.includes(s.toLowerCase()))
  );

  // ----- RENDER -----
  result.innerHTML = `
    <h2>SkillMap AI Result</h2>

    <p><strong>Target:</strong> ${goal}</p>

    <h3>Missing Skills</h3>
    <ul>
      ${
        missing.length
          ? missing.map(m => `<li>${m}</li>`).join("")
          : "<li>No major gaps 🎯</li>"
      }
    </ul>

    <h3>Learning Roadmap</h3>
    <ol>
      <li>Learn fundamentals</li>
      <li>Build real projects</li>
      <li>Deploy & apply</li>
    </ol>
  `;
};
