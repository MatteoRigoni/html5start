import {pi} from './myMathData.js';

const name = 'John Doe';

function somma(a, b) {
    return a + b;
}

function areaCerchio (r) {
    return pi * r * r;

}

function sayHello(name){
    return `Hello ${name}`;
}

const apiKey = "ee6b293d773f4fcd7e434f79bbc341f2";

export {name, somma, sayHello, areaCerchio, apiKey}; 