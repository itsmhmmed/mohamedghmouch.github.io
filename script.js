// 1. Typing Animation
const roles = ["Developer", "Problem Solver", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typeDelay = 100;
const eraseDelay = 50;
const newTextDelay = 2000;
const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typeDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseDelay);
    } else {
        roleIndex++;
        if (roleIndex >= roles.length) roleIndex = 0;
        setTimeout(type, typeDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(roles.length) setTimeout(type, newTextDelay + 250);
});

// 2. Scroll Animation (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
