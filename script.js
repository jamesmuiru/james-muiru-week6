// ==========================
// Part 1: Event Handling
// ==========================
document.getElementById("showMessageBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "🎉 You clicked the button!";
  });
  
  // ==========================
  // Part 2: Interactive Elements
  // ==========================
  
  // 1. Dark/Light Mode Toggle
  document.getElementById("toggleModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
  
  // 2. Counter
  let counter = 0;
  const counterValue = document.getElementById("counterValue");
  
  document.getElementById("increaseBtn").addEventListener("click", function() {
    counter++;
    counterValue.textContent = counter;
  });
  
  document.getElementById("decreaseBtn").addEventListener("click", function() {
    counter--;
    counterValue.textContent = counter;
  });
  
  // 3. Collapsible FAQ
  const faqQuestion = document.querySelector(".faq-question");
  const faqAnswer = document.querySelector(".faq-answer");
  
  faqQuestion.addEventListener("click", function() {
    faqAnswer.style.display = faqAnswer.style.display === "block" ? "none" : "block";
  });
  
  // ==========================
  // Part 3: Form Validation
  // ==========================
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form submission
  
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formSuccess").textContent = "";
  
    let valid = true;
  
    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
      document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
      valid = false;
    }
  
    // Validate Email with regex
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      valid = false;
    }
  
    // Validate Password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
      valid = false;
    }
  
    // Success Message
    if (valid) {
      document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    }
  });
  