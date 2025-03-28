document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards');

    // Sample data for members (replace with actual API or JSON data if available)
    const members = [
        {
            name: "John's Bakery",
            address: "123 Main St, New Orleans, LA",
            phone: "(555) 123-4567",
            website: "http://johnsbakery.com",
            logo: "images/johns-bakery-logo.png",
            membershipLevel: "Gold"
        },
        {
            name: "Smith's Hardware",
            address: "456 Elm St, New Orleans, LA",
            phone: "(555) 987-6543",
            website: "http://smithshardware.com",
            logo: "images/smiths-hardware-logo.png",
            membershipLevel: "Silver"
        },
        {
            name: "Green Landscaping",
            address: "789 Oak St, New Orleans, LA",
            phone: "(555) 555-5555",
            website: "http://greenlandscaping.com",
            logo: "images/green-landscaping-logo.png",
            membershipLevel: "Bronze"
        },
        {
            name: "Blue Ocean Spa",
            address: "101 River Rd, New Orleans, LA",
            phone: "(555) 222-3333",
            website: "http://blueoceanspa.com",
            logo: "images/blue-ocean-spa-logo.png",
            membershipLevel: "Gold"
        },
        {
            name: "Tech Solutions",
            address: "202 Tech St, New Orleans, LA",
            phone: "(555) 444-5555",
            website: "http://techsolutions.com",
            logo: "images/tech-solutions-logo.png",
            membershipLevel: "Silver"
        },
        {
            name: "Healthy Eats",
            address: "303 Wellness Ave, New Orleans, LA",
            phone: "(555) 666-7777",
            website: "http://healthyeats.com",
            logo: "images/healthy-eats-logo.png",
            membershipLevel: "Bronze"
        },
        {
            name: "Artisan Furniture",
            address: "404 Craft Ln, New Orleans, LA",
            phone: "(555) 888-9999",
            website: "http://artisanfurniture.com",
            logo: "images/artisan-furniture-logo.png",
            membershipLevel: "Gold"
        }
    ];

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
    members.forEach(member => {
        const memberCard = createMemberCard(member);
        cardsContainer.appendChild(memberCard);
    });
});