export function displayWeather(weather, idDiv) {
    document.getElementById(idDiv).innerHTML = 
    `<h4>${weather.name}</h4>
     <div id='containerWeather'>
       <img id='logoWeather' src='https://openweathermap.org/img/wn/${weather.weather[0].icon}.png'/>
       <span>${weather.weather[0].description}</span>
     <div>
    `;
}