fetch('members.json') // Reverted to original file path
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data); // Debugging log

        // Updated logic to handle the JSON structure as an array
        if (!Array.isArray(data)) {
            throw new Error('Invalid JSON structure: Expected an array of members');
        }

        const goldSilverMembers = data.filter(member =>
            member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
        );

        console.log('Filtered Gold/Silver members:', goldSilverMembers); // Debugging log

        const randomMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        console.log('Randomly selected members:', randomMembers); // Debugging log

        const spotlightContainer = document.getElementById('spotlight-container');
        if (!spotlightContainer) {
            throw new Error('Spotlight container element not found');
        }

        spotlightContainer.innerHTML = randomMembers.map(member => {
            const logo = member.logo || 'images/default-logo.jpg'; // Fallback for missing logo
            const phone = member.phone || 'N/A'; // Fallback for missing phone
            const address = member.address || 'N/A'; // Fallback for missing address
            const website = member.website || '#'; // Fallback for missing website

            return `
                <div class="business-card">
                    <h3>${member.name}</h3>
                    <img src="${logo}" alt="${member.name} Logo">
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Address:</strong> ${address}</p>
                    <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
                </div>
            `;
        }).join('');
    })
    .catch(error => console.error('Error fetching or processing member data:', error));
