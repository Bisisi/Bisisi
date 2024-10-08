// Function to load user profile data from local storage
function loadUserProfile() {
    const user = JSON.parse(localStorage.getItem('userProfile'));

    if (!user) {
        document.getElementById('userProfile').innerHTML = '<p>No user data found. Please complete your profile.</p>';
        return;
    }

    const profileElement = document.getElementById('userProfile');
    profileElement.innerHTML = `
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Address:</strong> ${user.address}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone Number:</strong> ${user.phone}</p>
        <p><strong>Company Name:</strong> ${user.company}</p>
    `;
}

// Function to toggle edit profile form
function editProfile() {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    if (!user) {
        alert('No user data available to edit.');
        return;
    }

    document.getElementById('editProfileForm').style.display = 'block';
    document.getElementById('username').value = user.username;
    document.getElementById('address').value = user.address;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.getElementById('company').value = user.company;
}

// Function to save profile data
function saveProfile() {
    const username = document.getElementById('username').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;

    const user = {
        username,
        address,
        email,
        phone,
        company
    };

    localStorage.setItem('userProfile', JSON.stringify(user));

    document.getElementById('editProfileForm').style.display = 'none';
    loadUserProfile();
}

// Load user profile when the page is loaded
window.onload = loadUserProfile;
