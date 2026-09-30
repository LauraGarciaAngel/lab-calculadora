const prompt = require('prompt-sync')();
let activo = true
while (activo) {
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
    if(numero2 === 0){
        resultado = "No se puede realizar esta operacion"
    }else{
        resultado = numero1 / numero2
    }
}
let respuesta = prompt("Desea realizar otra operación (S/N) ")
if (respuesta === "N"){
    activo = false
}
console.log(resultado)
}