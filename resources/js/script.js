// MENU BUTTON VARIABLES
const menuBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".close-button");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation ul li a");

// MENU BUTTON FUNCTIONS
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        closeBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});