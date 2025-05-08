// Event Handling
document.getElementById("clickButton").addEventListener("click", function () {
    alert("Button clicked!");
});

document.getElementById("clickButton").addEventListener("dblclick", function () {
    alert("Double-clicked!");
});

let longPressTimer;
document.getElementById("clickButton").addEventListener("mousedown", function () {
    longPressTimer = setTimeout(() => alert("Long press detected!"), 1000);
});
document.getElementById("clickButton").addEventListener("mouseup", function () {
    clearTimeout(longPressTimer);
});

// Change text and color
document.getElementById("changeTextButton").addEventListener("click", function () {
    this.textContent = "Changed!";
    this.style.backgroundColor = "green";
    this.style.color = "white";
});

// Keypress detection
document.getElementById("keypressInput").addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
});

// Accordion toggle
document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// Real-time email feedback
document.getElementById("email").addEventListener("input", function () {
    const feedback = document.getElementById("emailFeedback");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(this.value)) {
        feedback.textContent = "✅ Valid email";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "❌ Invalid email";
        feedback.style.color = "red";
    }
});

// Form validation
document.getElementById("userForm").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else if (!emailPattern.test(email)) {
        alert("Enter a valid email address.");
        event.preventDefault();
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        event.preventDefault();
    }
});
