// ================================
// FORCE INTERCEPT BUTTON CLICK
// ================================
document.addEventListener(
  "click",
  function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;

    e.preventDefault();      // ⛔ STOP FORM SUBMIT
    e.stopImmediatePropagation();

    generateSkillMap();
  },
  true // 🔥 CAPTURE PHASE (BEATS FORM SUBMIT)
);

// ================================
// CORE FUNCTION
// ================================
function generateSkillMap() {

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");

  if (!skillsInput || !goalInput) {
    alert("Inputs missing");
    return;
  }

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Enter skills and target role");
    return;
  }

  // ---------------- RESULT CONTAINER ----------------
  let result = document.querySelector(".result");

  if (!result) {
    result = document.createElement("div");
    result.className = "result";

    const button = document.querySelector("button");
    button.insertAdjacentElement("afterend", result);
  }

  // ---------------- AI LOGIC ----------------
  const roleSkills = {
    "AI Engineer": [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Statistics",
      "Linear Algebra",
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
      "Product Thinking",
      "User Research",
      "Analytics",
      "Communication",
      "Execution"
    ]
  };

  const userSkills = skills
    .toLowerCase()
    .split(/,|\n/)
    .map(s => s.trim());

  const expected = roleSkills[goal] || roleSkills["AI Engineer"];

  const missing = expected.filter(
    skill => !userSkills.some(u => u.includes(skill.toLowerCase()))
  );

  // ---------------- RENDER ----------------
  result.innerHTML = `
    <h2>SkillMap AI</h2>

    <p><strong>Target Role:</strong> ${goal}</p>

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
      <li>Master fundamentals</li>
      <li>Build real-world projects</li>
      <li>Apply, iterate, deploy</li>
    </ol>
  `;
}
