// Function to extract query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        fname: params.get('fname'),
        lname: params.get('lname'),
        formTimestamp: params.get('formTimestamp'), // Retrieve the timestamp
    };
}

// Get the current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString(); // Format: "MM/DD/YYYY, HH:MM:SS AM/PM"
}

// Display the thank you message
document.addEventListener('DOMContentLoaded', () => {
    const queryParams = getQueryParams();
    const thankYouMessage = document.getElementById('thankyou-message');

    if (thankYouMessage) {
        if (queryParams.fname && queryParams.lname && queryParams.formTimestamp) {
            thankYouMessage.textContent = `Thank you, ${queryParams.fname} ${queryParams.lname}, for reaching out to us. We received your message on ${queryParams.formTimestamp} and we will get back to you as soon as possible.`;
        } else {
            thankYouMessage.textContent = `Thank you for reaching out to us. We received your message, and we will get back to you as soon as possible.`;
        }
    }
});
