function toggleForms() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
    }
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    let valid = true;

    if (!validateEmail(email)) {
        showError('login-email-error', 'Please enter a valid email.');
        valid = false;
    } else {
        hideError('login-email-error');
    }

    if (password.length < 6) {
        showError('login-password-error', 'Password must be at least 6 characters.');
        valid = false;
    } else {
        hideError('login-password-error');
    }

    if (valid) {
        alert(`Logging in with email: ${email}`);
        // Here you would typically make an API call to log the user in
    }
}

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    let valid = true;

    if (name.trim() === "") {
        showError('signup-name-error', 'Please enter your name.');
        valid = false;
    } else {
        hideError('signup-name-error');
    }

    if (!validateEmail(email)) {
        showError('signup-email-error', 'Please enter a valid email.');
        valid = false;
    } else {
        hideError('signup-email-error');
    }

    if (password.length < 6) {
        showError('signup-password-error', 'Password must be at least 6 characters.');
        valid = false;
    } else {
        hideError('signup-password-error');
    }

    if (valid) {
        alert(`Signing up with name: ${name}, email: ${email}`);
        // Here you would typically make an API call to create the user
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = message;
    element.style.display = 'block';
}

function hideError(elementId) {
    const element = document.getElementById(elementId);
    element.style.display = 'none';
}
