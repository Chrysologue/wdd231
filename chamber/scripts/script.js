const navButton = document.getElementById('myButton');
const navElement = document.getElementById('myLinks')
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navElement.classList.toggle('show')
});
const lastModified = document.getElementById('lastmodified');
const currentYear = document.getElementById('current-year');
const date = new Date();
currentYear.textContent = date.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`

async function getData() {
    const request = new Request("./data/members.json");
    const response = await fetch(request);
    const data = await response.json();
    const members = data.members
    populate(members)
}
getData()
const cards = document.querySelector('.cards');
function populate(members)
{
    members.forEach(member => {
        const card = document.createElement('div')
        const name = document.createElement('p')
        const address = document.createElement('p');
        const phone = document.createElement('p')
        const url = document.createElement('a')
        const img = document.createElement('img');
        const level = document.createElement('p');
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone_number;
        url.setAttribute('href', member.website_url);
        url.textContent = "website"
        img.setAttribute('src', member.image_file)
        img.setAttribute('alt', member.name);
        img.setAttribute('loading', 'lazy');
        level.textContent = member.membership_level;
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address)
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);
        cards.appendChild(card);
    });
}