const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');


const myKey = "eb1c73a0723a19c5948b9d6c61df7f39"
const myLat = "-15.257495771901345";
const myLong = "48.54129622366718"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`;

async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            console.log(data);
            displayResult(data)
        }
        else {
            throw new Error(await response.text());
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

apiFetch()

function displayResult(data)
{
    captionDesc.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    weatherIcon.setAttribute('src', data.weather[0].description)
    const imgSource = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', imgSource);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}