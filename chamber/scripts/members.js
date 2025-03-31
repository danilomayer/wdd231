document.addEventListener('DOMContentLoaded', async () => {
    const cardsContainer = document.getElementById('cards');
    const viewToggleButtons = document.querySelectorAll('#view-toggle button');

    // Fetch member data from the JSON file
    const fetchMembers = async () => {
        try {
            const response = await fetch('members.json');
            if (!response.ok) {
                throw new Error('Failed to fetch members data');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    // Function to create a card for each member
    const createMemberCard = (member) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo" class="member-logo">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            <a href="${member.website}" target="_blank" class="member-website">Visit Website</a>
        `;

        return card;
    };

    // Function to create a list row for each member
    const createMemberRow = (member) => {
        const row = document.createElement('div');
        row.classList.add('list-row');

        row.innerHTML = `
            <div>${member.name}</div>
            <div>${member.address}</div>
            <div>${member.phone}</div>
            <div><a href="${member.website}" target="_blank">Visit Website</a></div>
        `;

        return row;
    };

    // Populate the cards container with member cards or rows
    const members = await fetchMembers();
    const renderView = (view) => {
        cardsContainer.innerHTML = '';
        if (view === 'grid') {
            members.forEach(member => {
                const memberCard = createMemberCard(member);
                cardsContainer.appendChild(memberCard);
            });
        } else if (view === 'list') {
            members.forEach(member => {
                const memberRow = createMemberRow(member);
                cardsContainer.appendChild(memberRow);
            });
        }
    };

    // Add event listeners to toggle buttons
    viewToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.dataset.view;
            cardsContainer.className = view;
            renderView(view);
        });
    });

    // Default view
    renderView('grid');
});