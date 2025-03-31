// Select the hamburger button and the navigation menu
const hamButton = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');

// Add a click event listener to the hamburger button
hamButton.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu
    navMenu.classList.toggle('active');
    hamButton.classList.toggle('active'); // Optional: toggle button appearance
});

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!hamButton.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
        hamButton.classList.remove('active'); // Optional: reset button appearance
    }
});