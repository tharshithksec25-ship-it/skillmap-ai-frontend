// DO NOT TOUCH HTML OR CSS

window.generateSkillMap = function () {
  const skillsBox = document.querySelector("textarea");
  const goalBox = document.querySelector("input");

  if (!skillsBox || !goalBox) {
    alert("Input fields not found");
    return;
  }

  const skills = skillsBox.value.trim();
  const goal = goalBox.value.trim();

  if (!skills || !goal) {
    alert("Please enter your skills and target role");
    return;
  }

  let result = document.querySelector(".result");

  if (!result) {
    result = document.createElement("div");
    result.className = "result";
    result.style.marginTop = "48px";
    document.querySelector("main")?.appendChild(result) ||
      document.body.appendChild(result);
  }

  // ---- AI LOGIC (LOCAL, DEMO-READY) ----
  const requiredSkills = {
    "AI Engineer": [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Model Deployment",
      "Data Structures",
      "System Design",
    ],
    "Product Manager": [
      "Product Thinking",
      "User Research",
      "Roadmapping",
      "Metrics",
      "Communication",
    ],
  };

  const userSkills = skills.toLowerCase().split(",").map(s => s.trim());
  const targetSkills = requiredSkills[goal] || [
    "Core fundamentals",
    "Projects",
    "Industry tools",
  ];

  const missing = targetSkills.filter(
    s => !userSkills.some(us => us.includes(s.toLowerCase()))
  );

  // ---- RENDER ----
  result.innerHTML = `
    <h2>SkillMap AI Result</h2>

    <p><strong>Target Role:</strong> ${goal}</p>

    <h3>Missing Skills</h3>
    <ul>
      ${missing.length ? missing.map(s => `<li>${s}</li>`).join("") : "<li>No major gaps 🎉</li>"}
    </ul>

    <h3>Learning Roadmap</h3>
    <ol>
      <li>Week 1–2: Learn fundamentals</li>
      <li>Week 3–4: Build real projects</li>
      <li>Week 5: Deploy & polish</li>
    </ol>
  `;
};
