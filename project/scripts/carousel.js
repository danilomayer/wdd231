const carousel = document.querySelector('.carousel');

// Fetch reviews from the JSON file
fetch('data/reviews.json')
    .then(response => response.json())
    .then(reviews => {
        // Populate the carousel with reviews
        reviews.forEach(review => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            item.innerHTML = `
                <p>"${review.text}"</p>
                <p>- ${review.author}</p>
                <p>${review.rating}</p>
            `;
            carousel.appendChild(item);
        });

        // Initialize the carousel after loading reviews
        initializeCarousel();
    })
    .catch(error => console.error('Error loading reviews:', error));

let currentIndex = 0;
let itemsPerView = 1; // Default for small screens

function updateItemsPerView() {
    if (window.innerWidth >= 1024) {
        itemsPerView = 3; // 3 items for large screens
    } else if (window.innerWidth >= 768) {
        itemsPerView = 2; // 2 items for medium screens
    } else {
        itemsPerView = 1; // 1 item for small screens
    }
}

function showNextItem() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index >= currentIndex && index < currentIndex + itemsPerView) {
            item.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % items.length;
    if (currentIndex + itemsPerView > items.length) {
        currentIndex = 0; // Reset to the beginning
    }
}

function initializeCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    updateItemsPerView();
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index < itemsPerView) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('resize', () => {
    initializeCarousel();
});

setInterval(showNextItem, 5000);