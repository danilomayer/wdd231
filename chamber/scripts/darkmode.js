// Select the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}