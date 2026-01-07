async function generateSkillMap() {
  const skillsInput = document.querySelector("textarea");
  const goalInput = document.querySelector("input");
  const resultBox = document.getElementById("result");

  const skills = skillsInput.value.trim();
  const goal = goalInput.value.trim();

  if (!skills || !goal) {
    resultBox.innerHTML = `
      <h3>Error</h3>
      <p>Please enter your current skills and target role.</p>
    `;
    return;
  }

  // FRONTEND-ONLY ROADMAP (NO BACKEND = NO ERRORS)
  const roadmap = getRoadmap(goal);

  resultBox.innerHTML = `
    <h3>Your SkillMap for ${goal}</h3>
    <ul>
      ${roadmap.map(step => `<li>${step}</li>`).join("")}
    </ul>
  `;
}

// SIMPLE ROLE-BASED LOGIC (EXTREMELY SAFE)
function getRoadmap(goal) {
  const role = goal.toLowerCase();

  if (role.includes("ai")) {
    return [
      "Strengthen Python & Data Structures",
      "Learn Linear Algebra & Probability",
      "Master Machine Learning (Scikit-learn)",
      "Deep Learning with PyTorch / TensorFlow",
      "Build real-world AI projects",
      "Deploy models using cloud services"
    ];
  }

  if (role.includes("product")) {
    return [
      "Understand user research & problem discovery",
      "Learn PRDs and roadmap planning",
      "Analytics & metrics (North Star)",
      "Stakeholder communication",
      "Agile & Scrum execution",
      "Launch and iterate products"
    ];
  }

  if (role.includes("web")) {
    return [
      "HTML, CSS, JavaScript fundamentals",
      "Modern frameworks (React / Next.js)",
      "Backend basics (APIs, Databases)",
      "Authentication & security",
      "Deployment & performance optimization"
    ];
  }

  return [
    "Clarify role-specific fundamentals",
    "Learn core technical skills",
    "Build hands-on projects",
    "Get feedback and iterate",
    "Prepare for interviews or real-world use"
  ];
}
