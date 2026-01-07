console.log("SkillMap JS loaded");

window.generateSkillMap = function () {
  console.log("Generate button clicked");

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");

  const skills = skillsInput?.value.trim();
  const goal = goalInput?.value.trim();

  if (!skills || !goal) {
    alert("Please enter skills and target role");
    return;
  }
// 🔥 FORCE RESULT INTO VIEWPORT
let result = document.getElementById("result");

if (!result) {
  result = document.createElement("section");
  result.id = "result";

  // VISIBILITY GUARANTEE
  result.style.position = "fixed";
  result.style.left = "50%";
  result.style.top = "50%";
  result.style.transform = "translate(-50%, -50%)";
  result.style.width = "80%";
  result.style.maxWidth = "900px";
  result.style.maxHeight = "80vh";
  result.style.overflowY = "auto";
  result.style.zIndex = "99999";
  result.style.background = "#0f0f0f";
  result.style.color = "#ffffff";
  result.style.padding = "40px";
  result.style.borderRadius = "16px";
  result.style.boxShadow = "0 0 40px rgba(0,0,0,0.7)";

  document.body.appendChild(result);
}

result.innerHTML = `
  <h2 style="margin-bottom:16px;">Skill Gap Analysis</h2>

  <p><strong>Target Role:</strong> ${goal}</p>

  <h3 style="margin-top:24px;">Missing Skills</h3>
  ${
    missing.length
      ? `<ul>${missing.map(s => `<li>${s}</li>`).join("")}</ul>`
      : `<p>You already match this role 🎯</p>`
  }

  <h3 style="margin-top:24px;">Learning Roadmap</h3>
  <ol>
    ${missing.map(s => `<li>Learn ${s}</li>`).join("")}
  </ol>

  <button onclick="document.getElementById('result').remove()"
    style="margin-top:24px;padding:12px 24px;font-weight:600;">
    Close
  </button>
`;

console.log("Result forced to viewport");


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
    ]
  };

  const required = roleSkills[goal] || [];
  const missing = required.filter(
    s => !skills.toLowerCase().includes(s.toLowerCase())
  );

  result.innerHTML = `
    <h2>Skill Gap Analysis</h2>
    <p><strong>Target Role:</strong> ${goal}</p>

    <h3>Missing Skills</h3>
    ${
      missing.length
        ? `<ul>${missing.map(s => `<li>${s}</li>`).join("")}</ul>`
        : `<p>You already match the role 🎯</p>`
    }

    <h3>Learning Roadmap</h3>
    <ol>
      ${missing.map(s => `<li>Learn ${s}</li>`).join("")}
    </ol>
  `;

  result.scrollIntoView({ behavior: "smooth" });
};

