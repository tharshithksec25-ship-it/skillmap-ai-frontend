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

  let result = document.getElementById("result");

  if (!result) {
    result = document.createElement("div");
    result.id = "result";

    /* VISIBILITY FORCE — UI SAFE */
    result.style.position = "relative";
    result.style.zIndex = "999";
    result.style.display = "block";
    result.style.minHeight = "200px";
    result.style.background = "#0f0f0f";
    result.style.color = "#ffffff";
    result.style.padding = "32px";
    result.style.marginTop = "48px";
    result.style.borderRadius = "14px";

    document.querySelector("button").parentElement.after(result);
  }

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
