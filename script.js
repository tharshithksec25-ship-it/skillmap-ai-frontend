async function generateSkillMap() {
  const skills = document.getElementById("skillsInput").value.trim();
  const goal = document.getElementById("goalInput").value.trim();
  const resultBox = document.getElementById("result");

  if (!skills || !goal) {
    resultBox.innerText = "Please fill in both fields.";
    return;
  }

  resultBox.innerText = "Generating skill map...";

  try {
    const response = await fetch(
      "https://skillmapai-epbzdgqxdnfkgthn.centralindia-01.azurewebsites.net/skillmap",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ skills, goal })
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    resultBox.innerHTML =
      "<pre>" + JSON.stringify(data, null, 2) + "</pre>";

  } catch (err) {
    console.error(err);
    resultBox.innerText = "Backend error. Check console.";
  }
}
