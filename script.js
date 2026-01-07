function generateSkillMap() {
  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");
  const resultBox = document.querySelector(".result");

  if (!skillsInput || !goalInput || !resultBox) {
    console.error("UI elements missing");
    return;
  }

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Please enter your skills and target role.");
    return;
  }

  const roadmap = [
    `Foundation concepts required for ${goal}`,
    `Core tools & technologies used in ${goal}`,
    `Hands-on projects using ${skills}`,
    `Advanced concepts & optimization`,
    `Capstone project aligned with ${goal}`,
    `Interview preparation & real-world practice`
  ];

  resultBox.innerHTML = `
    <h3>Your Personalized Skill Map</h3>
    <ul>
      ${roadmap.map(step => `<li>${step}</li>`).join("")}
    </ul>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("button")
    .addEventListener("click", generateSkillMap);
});
