// ============================================
// SKILLMAP AI - MAIN APPLICATION
// ============================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize engine and UI
  const engine = new SkillMapEngine();
  const ui = new SkillMapUI('results-container');
  
  // Get form elements
  const analyzeBtn = document.getElementById('analyze-btn');
  const resumeInput = document.getElementById('resume-input');
  const roleInput = document.getElementById('role-input');
  const resultsContainer = document.getElementById('results-container');
  
  // Add analyze button handler
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', function() {
      analyzeSkills();
    });
  }
  
  // Add Enter key support
  if (roleInput) {
    roleInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        analyzeSkills();
      }
    });
  }
  
  function analyzeSkills() {
    const resumeText = resumeInput.value.trim();
    const targetRole = roleInput.value.trim();
    
    // Validation
    if (!resumeText) {
      showError('Please enter your resume or skills');
      return;
    }
    
    if (!targetRole) {
      showError('Please enter your target role');
      return;
    }
    
    // Show loading state
    analyzeBtn.textContent = 'Analyzing...';
    analyzeBtn.disabled = true;
    analyzeBtn.classList.add('loading');
    
    // Hide any previous errors
    hideError();
    
    // Run analysis with slight delay for UX
    setTimeout(() => {
      try {
        // Run the analysis
        const result = engine.analyze(resumeText, targetRole);
        
        // Render results
        ui.render(result);
        
        // Scroll to results
        resultsContainer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Log for debugging
        console.log('Analysis complete:', result);
        
      } catch (error) {
        console.error('Analysis error:', error);
        showError('An error occurred during analysis. Please try again.');
      } finally {
        // Reset button
        analyzeBtn.textContent = 'Analyze Skills';
        analyzeBtn.disabled = false;
        analyzeBtn.classList.remove('loading');
      }
    }, 800);
  }
  
  function showError(message) {
    let errorDiv = document.getElementById('error-message');
    
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.id = 'error-message';
      errorDiv.className = 'error-message';
      analyzeBtn.parentNode.insertBefore(errorDiv, analyzeBtn.nextSibling);
    }
    
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  }
  
  function hideError() {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
  }
  
  // Sample data button (optional - for testing)
  const sampleBtn = document.getElementById('sample-btn');
  if (sampleBtn) {
    sampleBtn.addEventListener('click', function() {
      resumeInput.value = `Software Developer with 2 years experience
      
Skills: JavaScript, React, HTML, CSS, Git, Node.js
Experience with REST APIs and responsive design
Bachelor's degree in Computer Science
Worked on e-commerce projects and team collaboration`;
      
      roleInput.value = 'Full Stack Developer';
    });
  }
});

// Export for global access if needed
if (typeof window !== 'undefined') {
  window.SkillMapApp = {
    version: '2.0.0',
    initialized: true
  };
}
