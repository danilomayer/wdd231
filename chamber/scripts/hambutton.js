// Select the hamburger button and the navigation menu
const hamButton = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.navigation-menu');

// Add a click event listener to the hamburger button
hamButton.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu
    navMenu.classList.toggle('active');
});

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!hamButton.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});