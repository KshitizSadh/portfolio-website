document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    // Simulating message sent
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
        document.getElementById("contactForm").reset();
    }, 2000);
});
