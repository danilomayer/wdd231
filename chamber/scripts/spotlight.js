fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const goldSilverMembers = data.members.filter(member =>
            member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
        );

        const randomMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = randomMembers.map(member => `
            <div class="business-card">
                <h3>${member.name}</h3>
                <img src="${member.logo}" alt="${member.name} Logo">
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `).join('');
    })
    .catch(error => console.error('Error fetching member data:', error));
