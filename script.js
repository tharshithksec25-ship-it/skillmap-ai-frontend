// ===============================
// SkillMap AI - FINAL SCRIPT
// ===============================

console.log("SkillMap JS loaded");

// Ensure global access (important)
window.generateSkillMap = generateSkillMap;

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateBtn");

  if (!btn) {
    console.error("Generate button not found");
    return;
  }

  btn.addEventListener("click", generateSkillMap);
});

// ===============================
// MAIN FUNCTION
// ===============================
function generateSkillMap() {
  console.log("Generate button clicked");

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");

  if (!skillsInput || !goalInput) {
    alert("Input fields missing");
    return;
  }

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Please enter skills and target role");
    return;
  }

  // -------- Mock AI Logic --------
  const requiredSkills = [
    "Python",
    "Data Structures",
    "Algorithms",
    "Machine Learning",
    "Deep Learning",
    "SQL",
    "APIs",
    "System Design"
  ];

  const missingSkills = requiredSkills.filter(
    s => !skills.toLowerCase().includes(s.toLowerCase())
  );

  const roadmap = missingSkills.map(
    (s, i) => `${i + 1}. Learn ${s} (2 weeks)`
  );

  const resultText = `
TARGET ROLE
${goal}

CURRENT SKILLS
${skills}

MISSING SKILLS
${missingSkills.length ? missingSkills.join(", ") : "None 🎯"}

LEARNING ROADMAP
${roadmap.length ? roadmap.join("\n") : "You are job-ready 🚀"}
`;

  // -------- FORCE VISIBLE RESULT --------
  renderResult(resultText);
}

// ===============================
// RENDER RESULT (IMPOSSIBLE TO HIDE)
// ===============================
function renderResult(text) {
  let box = document.getElementById("skillmap-result");

  if (!box) {
    box = document.createElement("pre");
    box.id = "skillmap-result";

    box.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ffffff;
      color: #000000;
      padding: 32px;
      width: 85%;
      max-width: 900px;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 2147483647;
      border-radius: 16px;
      font-size: 15px;
      line-height: 1.6;
      white-space: pre-wrap;
      box-shadow: 0 0 100px rgba(0,0,0,0.9);
    `;

    document.documentElement.appendChild(box);
  }

  box.textContent = text;

  console.log("Result rendered");

  // Absolute fallback (cannot fail)
  alert(text);
}
