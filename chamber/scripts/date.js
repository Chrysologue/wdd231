const lastModified = document.getElementById('lastmodified');
const currentYear = document.getElementById('current-year');
const date = new Date();
currentYear.textContent = date.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`
