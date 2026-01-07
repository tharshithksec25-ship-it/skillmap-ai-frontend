const API_URL =
  "https://skillmapai-epbzdgqxdnfkgthn.centralindia-01.azurewebsites.net/skillmap";

const btn = document.getElementById("generateBtn");
const skillsInput = document.getElementById("skillsInput");
const goalInput = document.getElementById("goalInput");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", generateSkillMap);

async function generateSkillMap() {
  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Please enter both your skills and target role.");
    return;
  }

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "<h2>Analyzing...</h2><p>Please wait.</p>";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resume: skills,
        goal: goal
      })
    });

    if (!response.ok) {
      throw new Error("Backend returned error");
    }

    const data = await response.json();

    resultDiv.innerHTML = `
      <h2>Your Skill Map</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = `
      <h2>Error</h2>
      <p>Backend unreachable or failed. Check API URL.</p>
    `;
  }
}
