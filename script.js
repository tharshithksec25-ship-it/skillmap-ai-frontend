document.addEventListener("DOMContentLoaded", () => {
  console.log("SkillMap JS loaded");

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");
  const button = document.getElementById("generateBtn");

  button.addEventListener("click", () => {
    console.log("Button clicked");

    const skills = skillsInput.value.trim();
    const goal = goalInput.value.trim();

    if (!skills || !goal) {
      alert("Please enter skills and target role");
      return;
    }

    let result = document.getElementById("result");

    if (!result) {
      result = document.createElement("div");
      result.id = "result";

      /* 🔒 VISIBILITY FORCE — THIS IS THE FIX */
      result.style.position = "relative";
      result.style.zIndex = "999";
      result.style.display = "block";
      result.style.minHeight = "200px";
      result.style.background = "#0f0f0f";
      result.style.color = "#ffffff";
      result.style.padding = "32px";
      result.style.marginTop = "48px";
      result.style.borderRadius = "14px";
      result.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.08)";

      /* append AFTER the button section */
      button.closest("div").after(result);
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
      <h2 style="margin-bottom:16px">Skill Gap Analysis</h2>
      <p><strong>Target Role:</strong> ${goal}</p>

      <h3 style="margin-top:24px">Missing Skills</h3>
      ${
        missing.length
          ? `<ul>${missing.map(s => `<li>${s}</li>`).join("")}</ul>`
          : `<p>You already match the role 🎯</p>`
      }

      <h3 style="margin-top:24px">Learning Roadmap</h3>
      <ol>
        ${missing.map(s => `<li>Learn ${s}</li>`).join("")}
      </ol>
    `;

    console.log("Result rendered:", result.innerText.length);
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
