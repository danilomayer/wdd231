document.addEventListener('DOMContentLoaded', async () => {
    const cardsContainer = document.getElementById('cards');

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

    // Populate the cards container with member cards
    const members = await fetchMembers();
    members.forEach(member => {
        const memberCard = createMemberCard(member);
        cardsContainer.appendChild(memberCard);
    });
});