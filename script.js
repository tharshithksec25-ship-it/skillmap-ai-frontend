function generateSkillMap() {
  // SAFELY GRAB INPUTS (NO ASSUMPTIONS)
  const textarea = document.querySelector("textarea");
  const input = document.querySelector("input");
  const result = document.getElementById("result");

  if (!textarea || !input || !result) {
    console.error("Required elements not found in DOM");
    return;
  }

  const skills = textarea.value.trim();
  const goal = input.value.trim();

  if (!skills || !goal) {
    result.innerHTML = `
      <h3>Error</h3>
      <p>Please enter your current skills and target role.</p>
    `;
    return;
  }

  const roadmap = buildRoadmap(goal);

  result.innerHTML = `
    <h3>Your SkillMap for ${goal}</h3>
    <ul>
      ${roadmap.map(step => `<li>${step}</li>`).join("")}
    </ul>
  `;
}

function buildRoadmap(goal) {
  const g = goal.toLowerCase();

  if (g.includes("ai")) {
    return [
      "Python fundamentals & clean coding",
      "Math for AI (Linear Algebra, Probability)",
      "Machine Learning with scikit-learn",
      "Deep Learning with PyTorch / TensorFlow",
      "Build real-world AI projects",
      "Deploy models using cloud platforms"
    ];
  }

  if (g.includes("product")) {
    return [
      "User research & problem framing",
      "PRDs and roadmap planning",
      "Analytics and KPIs",
      "Stakeholder communication",
      "Agile execution",
      "Product launches & iteration"
    ];
  }

  if (g.includes("web")) {
    return [
      "HTML, CSS, JavaScript mastery",
      "Modern frameworks (React / Next.js)",
      "Backend APIs & databases",
      "Auth & security basics",
      "Deployment and optimization"
    ];
  }

  return [
    "Clarify fundamentals",
    "Learn core tools",
    "Build hands-on projects",
    "Get feedback",
    "Iterate and grow"
  ];
}
