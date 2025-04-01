const options = { year: 'numeric' };
const thisYear = new Date().getFullYear();
document.getElementById('currentdate').textContent = thisYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
