console.log("SkillMap JS LOADED");

// ---------- CREATE RESULT CONTAINER SAFELY ----------
function getOrCreateResultBox() {
  let box = document.getElementById("skillmap-result");

  if (!box) {
    box = document.createElement("div");
    box.id = "skillmap-result";
    box.style.marginTop = "40px";
    box.style.padding = "24px";
    box.style.background = "#0f0f0f";
    box.style.borderRadius = "12px";
    box.style.color = "#ffffff";
    box.style.fontSize = "16px";
    box.style.lineHeight = "1.6";
    box.style.whiteSpace = "pre-line";

    const btn = document.getElementById("generateBtn");
    btn.parentNode.appendChild(box);
  }

  return box;
}

// ---------- GLOBAL FUNCTION (DO NOT CHANGE NAME) ----------
window.generateSkillMap = function () {
  console.log("Generate button clicked");

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");

  if (!skillsInput || !goalInput) {
    alert("Inputs not found");
    return;
  }

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Please fill both fields");
    return;
  }

  // -------- MOCK AI ENGINE --------
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

  const missing = requiredSkills.filter(
    s => !skills.toLowerCase().includes(s.toLowerCase())
  );

  let output = "";
  output += "🎯 TARGET ROLE\n";
  output += goal + "\n\n";

  output += "🧠 CURRENT SKILLS\n";
  output += skills + "\n\n";

  output += "❌ MISSING SKILLS\n";
  output += missing.length ? missing.join(", ") : "None — You’re ready 🚀";
  output += "\n\n";

  output += "🗺️ LEARNING ROADMAP\n";
  if (missing.length) {
    missing.forEach((s, i) => {
      output += `${i + 1}. Learn ${s} (2 weeks)\n`;
    });
  } else {
    output += "Apply for roles, build projects, and interview.";
  }

  // -------- RENDER ON PAGE --------
  const box = getOrCreateResultBox();
  box.textContent = output;

  console.log("Result rendered on page");
};

// ---------- SAFE BUTTON BIND ----------
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateBtn");
  if (btn) {
    btn.onclick = window.generateSkillMap;
    console.log("Button bound successfully");
  } else {
    console.error("generateBtn not found");
  }
});
