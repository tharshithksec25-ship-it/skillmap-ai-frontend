async function generateSkillMap() {
  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");
  const resultBox = document.getElementById("result");

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    resultBox.innerHTML = "<h3>Error</h3><p>Please enter skills and a target role.</p>";
    return;
  }

  // TEMP AI LOGIC (hackathon-safe, deterministic)
  const roadmap = `
<h3>Your Skill Map for ${goal}</h3>
<ul>
  <li>Foundational CS (DSA, OOP)</li>
  <li>Python mastery</li>
  <li>Math for ML (Linear Algebra, Probability)</li>
  <li>Machine Learning algorithms</li>
  <li>Deep Learning & Neural Networks</li>
  <li>Projects + Portfolio</li>
  <li>System Design basics</li>
</ul>
<p><strong>Current skills detected:</strong> ${skills}</p>
`;

  resultBox.innerHTML = roadmap;
}
