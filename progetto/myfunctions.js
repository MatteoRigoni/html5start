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

export {name, somma, sayHello, areaCerchio}; 