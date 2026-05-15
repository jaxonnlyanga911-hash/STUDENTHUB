// SIGNUP
function signup() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("All fields are required");
        return;
    }

    const user = { username, email, password };
    localStorage.setItem("studyhubUser", JSON.stringify(user));

    alert("Signup successful! Please login.");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const savedUser = JSON.parse(localStorage.getItem("studyhubUser"));

    if (!savedUser) {
        alert("No account found. Please sign up.");
        return;
    }

    if (username === savedUser.username && password === savedUser.password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}

// PROTECT DASHBOARD
function protectDashboard() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
