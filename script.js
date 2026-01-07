const API_URL =
  "https://skillmapai-epbzdgqxdnfkgthn.centralindia-01.azurewebsites.net/skillmap";

// Grab elements WITHOUT changing HTML
const skillsInput = document.querySelector(
  'textarea[placeholder*="skills"]'
);

const goalInput = document.querySelector(
  'input[placeholder*="Target role"]'
);

const button = Array.from(document.querySelectorAll("button"))
  .find(btn => btn.textContent.includes("GENERATE"));

const resultDiv = document.querySelector("#result") || createResultBox();

function createResultBox() {
  const div = document.createElement("div");
  div.id = "result";
  div.style.marginTop = "40px";
  document.body.appendChild(div);
  return div;
}

button.addEventListener("click", generateSkillMap);

async function generateSkillMap() {
  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    alert("Please enter both your skills and target role.");
    return;
  }

  resultDiv.innerHTML = "<h2>Analyzing your profile…</h2>";

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
      throw new Error("Backend error");
    }

    const data = await response.json();

    resultDiv.innerHTML = `
      <h2>Your Skill Map</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML =
      "<h2>Error</h2><p>Backend request failed.</p>";
  }
}
