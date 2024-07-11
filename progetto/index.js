import {name, somma, sayHello, areaCerchio} from './myfunctions.js';


const myButton = document.getElementById('myButton');
const myArticle = document.getElementById('myArticle');

myButton.addEventListener('click', function(){
    const area = areaCerchio(5);
    const nome = name;
    const saluto = sayHello(nome);
    const returnString = `L'area del cerchio di raggio 5 è ${area}. ${saluto}`;
    myArticle.innerHTML = returnString;
});

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


(async function (){
    await myFetch();
})();

async function myFetch(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}





