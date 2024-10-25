

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Elements for name and origin
    const nameElement = document.getElementById("name");
    const originElement = document.getElementById("origin");

    // Name and origin data
    const name = "Aditya Bhalla";
    const origin = "Chandigarh, India";

    // Set name and origin in the DOM
    if (nameElement) {
        nameElement.textContent = name;
    }
    if (originElement) {
        originElement.textContent = origin;
    }

    // Skills highlighting functionality
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.classList.add("highlight");
        });
        skill.addEventListener("mouseout", () => {
            skill.classList.remove("highlight");
        });
    });
});
    