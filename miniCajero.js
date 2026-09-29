const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Ingrese numero 1 "));
let numero2 = parseInt(prompt("Ingrese numero 2 "));
let operacion = prompt("ingresar operacion (+ , -, *, /): ");

let resultado = numero1 + numero2 ;

if (operacion === "+") {
    resultado = numero1 + numero2
}else if(operacion === "-"){
    resultado = numero1 - numero2
}else if(operacion === "*"){
    resultado = numero1 * numero2
}else if(operacion === "/"){
    resultado = numero1 / numero2
}else

console.log(resultado)