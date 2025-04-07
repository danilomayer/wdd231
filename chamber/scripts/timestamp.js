// Set the form timestamp when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('formTimestamp');
    if (timestampField) {
        const now = new Date();
        timestampField.value = now.toISOString(); // Use ISO format for the timestamp
    }
});