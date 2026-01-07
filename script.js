console.log("SkillMap JS LOADED");

// FORCE GLOBAL FUNCTION (THIS IS THE KEY FIX)
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

  // ===== MOCK AI LOGIC =====
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
  output += "TARGET ROLE:\n" + goal + "\n\n";
  output += "CURRENT SKILLS:\n" + skills + "\n\n";
  output += "MISSING SKILLS:\n";
  output += missing.length ? missing.join(", ") : "None 🎯";
  output += "\n\nROADMAP:\n";

  if (missing.length) {
    missing.forEach((s, i) => {
      output += `${i + 1}. Learn ${s} (2 weeks)\n`;
    });
  } else {
    output += "You are job ready 🚀";
  }

  // ===== GUARANTEED DISPLAY =====
  alert(output);
};

// ALSO BIND BUTTON SAFELY
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateBtn");
  if (btn) {
    btn.onclick = window.generateSkillMap;
    console.log("Button bound successfully");
  } else {
    console.error("generateBtn not found");
  }
});
