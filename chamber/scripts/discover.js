const request = new Request("./data/discover.json");
async function getInfo() {
    try{
        const response = await fetch(request);
        if(response.ok)
        {
            const data = await response.json();
            populateCard(data)
        }
        else {
            console.log(await response.text());
        }
    }
    catch (err)
    {
        console.log(err);
    }
}
getInfo()

const section = document.querySelector(".discovery-secton");

function populateCard(data)
{
    data.forEach(item => {
        const card = document.createElement('div');

        const h2 = document.createElement('h2');
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        const address = document.createElement('address');
        const para = document.createElement('p');
        const button = document.createElement('button');
        h2.textContent = item.name;
        image.setAttribute('src', item.image);
        image.setAttribute('alt', item.name);
        figure.appendChild(image);
        address.textContent = item.address;
        para.textContent = item.description;

        
        button.style.cursor = 'pointer';

        para.style.display = 'none'
        button.addEventListener('click', () => {
            if (para.style.display == 'none')
            {
                para.style.display = 'block';
                button.textContent = 'Show Less';
            }
            else {
                para.style.display = 'none',
                button.textContent = 'Learn More';
            }
        })
        button.textContent = "Learn More.."

        card.appendChild(h2);
        card.appendChild(address);
        card.append(figure)
        card.appendChild(para);
        card.appendChild(button);

        section.appendChild(card)
    });
}


function getDaysBetweenDates(lastVisitDate) {
    const currentDate = new Date();
    const lastVisit = new Date(lastVisitDate);
    const timeDifference = currentDate - lastVisit;
    return Math.floor(timeDifference / (1000 * 3600 * 24)); s
}


function setLastVisitDate() {
    const currentDate = new Date();
    localStorage.setItem('lastVisitDate', currentDate.toISOString());
}


function displayVisitMessage() {
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const visitorMessageDiv = document.getElementById('visitor-message');
    
    if (!lastVisitDate) {
        visitorMessageDiv.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = getDaysBetweenDates(lastVisitDate);
        
        if (daysSinceLastVisit < 1) {
            visitorMessageDiv.textContent = "Back so soon! Awesome!";
        } else {
            visitorMessageDiv.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
        }
    }

    setLastVisitDate();
}


window.onload = function() {
    displayVisitMessage();
};
