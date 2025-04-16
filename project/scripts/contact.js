// Populate the formTimestamp field with the current date and time
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const timestampField = document.getElementById('formTimestamp');

    form.addEventListener('submit', () => {
        const now = new Date();
        timestampField.value = now.toLocaleString(); // Format: "MM/DD/YYYY, HH:MM:SS AM/PM"
    });
});