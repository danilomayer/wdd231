fetch('data/discover.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('discover-cards');
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card-listing');
            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            container.appendChild(card);
        });
    });