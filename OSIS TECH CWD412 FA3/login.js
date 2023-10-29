// Function to save user credentials
function saveCredentials(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }
  
  // Function to check if user is already signed in
  function checkSignIn() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      return true; // User is signed in
    } else {
      return false; // User is not signed in
    }
  }
  
  // Function to handle login form submission
  function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the entered password is correct
    if (password === localStorage.getItem('password')) {
      saveCredentials(username, password);
      if (checkSignIn()) {
        window.location.href = 'home.html'; // Redirect to home page after successful login
      }
    } else {
      document.getElementById('errorMessage').style.display = 'block'; // Show error message for incorrect password
    }
  }
  
  // Function to handle signup form submission
  function handleSignupFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
    saveCredentials(username, password);
    if (checkSignIn()) {
      window.location.href = 'home.html'; // Redirect to home page after successful signup
    }
  }
  
  // Show signup form and hide login form
  function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
  }
  
  // Add event listener to login form submission
  document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmit);
  
  // Add event listener to signup form submission
  document.getElementById('signupForm').addEventListener('submit', handleSignupFormSubmit);