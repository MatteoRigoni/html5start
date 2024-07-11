import {name, somma, sayHello, areaCerchio, apiKey} from './myfunctions.js';
import {drawMap} from './myMap.js'
import {displayWeather} from './myWeather.js'

async function addMap(idDiv, latitude, longitude) {
    var container = document.getElementById('mapContainer');
    var containerWeather = document.createElement('div');
    var mapDiv = document.createElement('div');
    var mapWeather = document.createElement('div');
    mapDiv.id = idDiv;
    mapWeather.id = idDiv + '_weather';
    mapDiv.className = 'generic-map';
    containerWeather.className = 'map-weather';
    
    containerWeather.append(mapDiv);
    containerWeather.append(mapWeather);
    container.append(containerWeather);

    drawMap(idDiv, latitude, longitude);
    
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=it`;

    const res = await fetch(urlApi);
    const apiWeather = await res.json();
    displayWeather(apiWeather, mapWeather.id);
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  async function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    await addMap('map', crd.latitude, crd.longitude);   
    
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}&units=metric&lang=it`;

    const res = await fetch(urlApi);
    const apiWeather = await res.json();
    //displayWeather(apiWeather, 'weather');

    // const res = fetch(urlApi).then((x) => {
    //     const body = x.json().then((apiWeather) => {
    //         console.log(apiWeather);
    //         displayWeather(apiWeather, 'weather');
    //     });
    // });    
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  if (navigator.geolocation) 
    navigator.geolocation.getCurrentPosition(success, error, options);

  await addMap('map1', 51.5, -0.09);
  await addMap('map2', 41.5, -0.29);
  await addMap('map3', 42.5, -0.29);

// const myButton = document.getElementById('myButton');
// const myArticle = document.getElementById('myArticle');

// myButton.addEventListener('click', function(){
//     const area = areaCerchio(5);
//     const nome = name;
//     const saluto = sayHello(nome);
//     const returnString = `L'area del cerchio di raggio 5 è ${area}. ${saluto}`;
//     myArticle.innerHTML = returnString;
// });

// const myFetch = fetch("https://sssssjsonplaceholder.typicode.com/todos/1");
// myFetch.then((response) => {
// //    console.log("fetch completato");
// //    console.log(response);
//     const body = response.json();
//     body.then( data => {
//         console.log(data);
//     });
// }).catch( error => {
//     console.log("fetch fallito");
//     console.log(error);});


// (async function (){
//     await myFetch();
// })();

// async function myFetch(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await response.json();
//     console.log(data);
// }





