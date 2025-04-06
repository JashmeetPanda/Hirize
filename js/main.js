// Mobile navbar toggle
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};

// Modal popup
const modal = document.getElementById("loginModal");
const loginBtn = document.querySelector(".btn"); // Nav bar login
const chromeBtn = document.querySelector(".open-modal-btn"); // Get it on Chrome button
const closeBtn = document.querySelector(".close");

// Open modal on login button click
loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
});

// Open modal on "Get it on Chrome" button
chromeBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Close modal on 'x'
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
