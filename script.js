// Make function GLOBAL so button onclick works
window.generateSkillMap = function () {
  // 1️⃣ Get inputs SAFELY (based on placeholders you already have)
  const skillsInput = document.querySelector(
    'textarea[placeholder*="skills"]'
  );
  const goalInput = document.querySelector(
    'input[placeholder*="Target"]'
  );

  if (!skillsInput || !goalInput) {
    alert("Inputs not found. UI structure mismatch.");
    return;
  }

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Please enter skills and target role");
    return;
  }

  // 2️⃣ Find OR create result container IN THE RIGHT PLACE
  let resultBox = document.querySelector(".result");

  if (!resultBox) {
    resultBox = document.createElement("div");
    resultBox.className = "result";

    // Insert AFTER the button (guaranteed visible)
    const button = document.querySelector("button");
    button.parentNode.insertBefore(resultBox, button.nextSibling);
  }

  // 3️⃣ AI LOGIC (offline-safe, demo-ready)
  const roleSkills = {
    "AI Engineer": [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Maths",
      "Model Deployment",
      "Projects"
    ],
    "Web Developer": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "APIs",
      "Deployment"
    ]
  };

  const userSkills = skills
    .toLowerCase()
    .split(",")
    .map(s => s.trim());

  const expected = roleSkills[goal] || [
    "Fundamentals",
    "Projects",
    "Industry tools"
  ];

  const missing = expected.filter(
    s => !userSkills.some(u => u.includes(s.toLowerCase()))
  );

  // 4️⃣ Render (NO UI STYLING CHANGED)
  resultBox.innerHTML = `
    <h2>SkillMap AI Analysis</h2>

    <p><strong>Target Role:</strong> ${goal}</p>

    <h3>Missing Skills</h3>
    <ul>
      ${
        missing.length
          ? missing.map(m => `<li>${m}</li>`).join("")
          : "<li>No major gaps 🎯</li>"
      }
    </ul>

    <h3>Roadmap</h3>
    <ol>
      <li>Phase 1: Learn fundamentals</li>
      <li>Phase 2: Build real projects</li>
      <li>Phase 3: Deploy & optimize</li>
    </ol>
  `;
};
