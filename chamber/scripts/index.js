async function getData() {
    const request = new Request("./data/members.json");
    const response = await fetch(request);
    const data = await response.json();
    const members = data.members
    const randomItems = getRandomCompany(members, 3);
    displayResult(randomItems)
}

getData()

function getRandomCompany(array,number)
{
    const goldAndSilverComanies = array.filter(member => member.
        membership_level == 'gold' || member.
        membership_level == 'silver')

    if(number > goldAndSilverComanies.length)
    {
        throw new Error("Number of items requested exceeds the array length");
    }
    const randomItems = []
    while (randomItems.length < number)
    {
        const randomItem = goldAndSilverComanies[Math.floor(Math.random() * goldAndSilverComanies.length)];
        if(!randomItems.includes(randomItem))
        {
            randomItems.push(randomItem);
        }
    }
    return randomItems;

}

const cards = document.querySelector('.company-spotlight');
function displayResult(array)
{
    array.forEach(item => {
        const card = document.createElement('div');
        

        const allCard = document.createElement('div');
        allCard.classList.add('card-item');

        const detCards = document.createElement('div');
        detCards.setAttribute('id', 'each-item')
        
        const h2 = document.createElement('h2');
        const logo = document.createElement('img');
        const phone = document.createElement('p');
        const address = document.createElement('p');
        const url = document.createElement('a');
        const membership = document.createElement('p')

        logo.setAttribute('class', 'card-logo');

        h2.textContent = item.name;
        logo.setAttribute('src', item.image_file);
        logo.setAttribute('alt', item.name);
        address.innerHTML = `<b>ADDRESS: </b>${item.address}`;
        phone.innerHTML = `<b>PHONE: </b>${item.phone_number}`;
        url.setAttribute('href', item.website_url);
        url.innerHTML = `<b>URL: </b>${item.website_url}`;
        membership.innerHTML = `<b>LEVEL: </b>${item.membership_level}`;

        detCards.appendChild(phone);
        detCards.appendChild(address);
        detCards.appendChild(url);
        detCards.appendChild(membership);
        allCard.appendChild(logo);
        allCard.appendChild(detCards);
        card.appendChild(h2);
        card.appendChild(allCard)

        cards.appendChild(card)
    });

}
const myKey = "eb1c73a0723a19c5948b9d6c61df7f39";
const myLat = "-15.257495771901345";
const myLong = "48.54129622366718";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function fetchAPI() {
    try {
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            getResult(data);
        }
        else {
            console.log(await response.text());
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
fetchAPI()


const currentWeather = document.querySelector('.current-weather');
function getResult(data)
{
    const wCard = document.createElement('div');
    wCard.classList.add('weather-card');

    const descContainer = document.createElement('div');

    const currentTemp = document.createElement('p');
    const desc = document.createElement('p');
    const icon = document.createElement('img');
    const maxTemp = document.createElement('p');
    const minTemp = document.createElement('p');
    const humidity = document.createElement('p');
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    maxTemp.innerHTML = `High: ${data.main.temp_max}&deg;`;
    minTemp.innerHTML = `Low: ${data.main.temp_min}&deg;`
    const imageSorce = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', imageSorce)
    icon.setAttribute('alt', data.weather[0].description);

    wCard.appendChild(icon)

    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    descContainer.appendChild(currentTemp);
    desc.textContent = data.weather[0].description;
    descContainer.appendChild(desc);
    descContainer.appendChild(maxTemp);
    descContainer.appendChild(minTemp);
    descContainer.appendChild(humidity);

    wCard.appendChild(descContainer);
    currentWeather.appendChild(wCard)
}
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function fetchForecatAPI() {
    try{
        const response = await fetch(forecastUrl);
        if(response.ok)
        {
            const data = await response.json();
            displayForecast(data);
        }
        else {
            console.log(await response.text());
        }
    }
    catch (error)
    {
        console.log(`Error: ${error}`);
    }
}
fetchForecatAPI()

const forecast = document.querySelector('.weather-forecast');

function displayForecast(data) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayIndex = new Date().getDay();

    const uniqueDates = [];
    const threeDays = []; 

    data.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        if (!uniqueDates.includes(date)) {
            uniqueDates.push(date);
            threeDays.push(item);
        }
    });

    threeDays.slice(0, 3).forEach((data, index) => {
        const temp = data.main.temp.toFixed(2);
        const date = new Date(data.dt_txt);
        
        const cont = document.createElement('div');
        cont.classList.add('forecast');
        const dayName = index === 0 ? 'Today' : days[(todayIndex + index) % 7];
        const para = document.createElement('p');
        para.textContent = `${dayName}: ${temp}°C`;
        cont.appendChild(para);
        forecast.appendChild(cont)
    });
}




