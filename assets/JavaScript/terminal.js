const textElement = document.getElementById("terminal-text");
const messages = [
    "Initializing...",
    "Loading skills...",
    "Access granted!",
    "Welcome to My Cyber Portfolio"
];

let index = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < messages[index].length) {
        textElement.innerHTML += messages[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        charIndex = 0;
        index++;
        if (index < messages.length) {
            textElement.innerHTML += "\n";
            setTimeout(typeText, 500);
        }
    }
}

window.onload = () => setTimeout(typeText, 1000);
