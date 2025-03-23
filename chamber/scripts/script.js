async function getData(view) {
    const request = new Request("./data/members.json");
    const response = await fetch(request);
    const data = await response.json();
    const members = data.members
    
    if (view === 'grid') {
        populateGrid(members);
    } 
    else {
        populateList(members);
    }
}


const cards = document.querySelector('.cards');
const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');

let currentView = 'grid';

gridButton.addEventListener('click', () => {
    currentView = 'grid';
    updateLayout();
});

listButton.addEventListener('click', () => {
    currentView = 'list';
    updateLayout();
});


function updateLayout() {
    // Clear current cards
    cards.innerHTML = '';
    
    // Update the layout class
    if (currentView === 'grid') {
        cards.classList.remove('list-view');
        cards.classList.add('grid-view');
    } else {
        cards.classList.remove('grid-view');
        cards.classList.add('list-view');
    }

    // Fetch data and populate based on current view
    getData(currentView);
}


function populateGrid(members)
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
        url.textContent = "website";
        url.style.textDecoration = "underline"
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
function populateList(members)
{
    members.forEach(member => {
        const card = document.createElement('div')
        const name = document.createElement('p')
        const address = document.createElement('p');
        const phone = document.createElement('p')
        const url = document.createElement('a')
        const level = document.createElement('p');
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone_number;
        url.setAttribute('href', member.website_url);
        url.textContent = "website";
        url.style.textDecoration = "underline"
        level.textContent = member.membership_level;
        card.appendChild(name);
        card.appendChild(address)
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);
        cards.appendChild(card);
    });
}
getData(currentView);


