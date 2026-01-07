function generateSkillMap() {
  console.log("Generate button clicked");

  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");

  const skills = skillsInput?.value.trim();
  const goal = goalInput?.value.trim();

  if (!skills || !goal) {
    alert("Please enter skills and target role");
    return;
  }

  const requiredSkills = [
    "Python",
    "Data Structures",
    "Machine Learning",
    "Deep Learning",
    "System Design",
    "SQL",
    "APIs"
  ];

  const userSkills = skills.toLowerCase();
  const missing = requiredSkills.filter(
    s => !userSkills.includes(s.toLowerCase())
  );

  // 🔥 HARD MOUNT TO <html> (BYPASSES ALL TRANSFORMS)
  let modal = document.getElementById("skillmap-modal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "skillmap-modal";

    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      z-index: 2147483647;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const box = document.createElement("div");
    box.id = "skillmap-box";

    box.style.cssText = `
      background: #0f0f0f;
      color: #ffffff;
      width: 85%;
      max-width: 900px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 40px;
      border-radius: 18px;
      box-shadow: 0 0 60px rgba(0,0,0,0.9);
      font-size: 16px;
    `;

    modal.appendChild(box);

    // ⬅️ KEY FIX
    document.documentElement.appendChild(modal);
  }

  document.getElementById("skillmap-box").innerHTML = `
    <h2>Skill Gap Analysis</h2>
    <p><strong>Target Role:</strong> ${goal}</p>

    <h3 style="margin-top:24px;">Missing Skills</h3>
    ${
      missing.length
        ? `<ul>${missing.map(s => `<li>${s}</li>`).join("")}</ul>`
        : `<p>You already meet the requirements 🎯</p>`
    }

    <h3 style="margin-top:24px;">Learning Roadmap</h3>
    <ol>
      ${missing.map(s => `<li>Learn ${s}</li>`).join("")}
    </ol>

    <button id="closeSkillMap"
      style="margin-top:24px;padding:12px 24px;font-weight:600;">
      Close
    </button>
  `;

  document.getElementById("closeSkillMap").onclick = () => modal.remove();

  console.log("MODAL RENDERED AND VISIBLE");
}
