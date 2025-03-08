const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    // When the hamburger button is clicked, the navigation menu will open.
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});