const form = document.getElementById('registrationForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const dob = document.getElementById('dob');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const dobError = document.getElementById('dobError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    // Prevent actual page reload
    event.preventDefault();
    
    let isValid = true;

    // Clear previous errors
    emailError.textContent = "";
    passwordError.textContent = "";
    dobError.textContent = "";
    successMessage.style.display = "none";

    // 1. Email Validation (Regex for standard email formats)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // 2. Password Validation (Match check & minimum length)
    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        passwordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    // 3. Date format validation (MM/DD/YYYY)
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!dateRegex.test(dob.value)) {
        dobError.textContent = "Please use MM/DD/YYYY format.";
        isValid = false;
    }

    // 4. Check HTML5 required fields (Radios, Checkbox, Full Name)
    if (!form.checkValidity()) {
        // If native validation fails (e.g., checkbox not ticked)
        form.reportValidity(); 
        isValid = false;
    }

    // 5. Form Submission Handling & Feedback
    if (isValid) {
        successMessage.style.display = "block";
        form.reset(); // Clear form after successful submit
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }
});