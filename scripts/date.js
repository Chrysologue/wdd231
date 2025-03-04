const currentYear = document.getElementById('currentyear');
const dateModified = document.getElementById('lastModified');
const date = new Date();
currentYear.textContent = date.getFullYear();
dateModified.textContent = `Last update: ${document.lastModified}`;
