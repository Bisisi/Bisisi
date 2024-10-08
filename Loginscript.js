// Simulate user storage for demo purposes
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to handle sign in
function signIn() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    const emailError = document.getElementById('signInEmailError');
    const passwordError = document.getElementById('signInPasswordError');
    const successMessage = document.getElementById('successMessage');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    successMessage.style.display = 'none';

    // Check if user exists
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        if (!email) {
            emailError.innerText = 'Please enter a valid email.';
            emailError.style.display = 'block';
        } else if (!password) {
            passwordError.innerText = 'Please enter your password.';
            passwordError.style.display = 'block';
        } else {
            emailError.innerText = 'Invalid email or password.';
            emailError.style.display = 'block';
        }
        return;
    }

    // If valid, redirect to home page
    window.location.href = 'home.html';
}

// Function to handle account creation
function createAccount() {
    const email = document.getElementById('createEmail').value;
    const password = document.getElementById('createPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailError = document.getElementById('createEmailError');
    const passwordError = document.getElementById('createPasswordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const successMessage = document.getElementById('createSuccessMessage');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    successMessage.style.display = 'none';

    // Validate email
    if (!validateEmail(email)) {
        emailError.innerText = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        return;
    }

    // Validate password
    if (!validatePassword(password)) {
        passwordError.innerText = 'Password must be at least 8 characters long and contain a number and a special character.';
        passwordError.style.display = 'block';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        return;
    }

    // Check if user already exists
    if (users.find(user => user.email === email)) {
        emailError.innerText = 'Account with this email already exists.';
        emailError.style.display = 'block';
        return;
    }

    // Add user to storage
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Success message
    successMessage.innerText = 'Account created successfully! Redirecting to sign in page...';
    successMessage.style.display = 'block';

    // Redirect to sign in page after 2 seconds
    setTimeout(() => {
        window.location.href = 'sign-in.html';
    }, 2000);
}

// Function to validate email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate password
function validatePassword(password) {
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    return passwordPattern.test(password);
}

// Function to show the create account form
function showCreateAccount() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('createAccountForm').style.display = 'block';
}

// Function to reset password (simplified)
function resetPassword() {
    alert('Password reset functionality is not implemented yet.');
}
