const prompt = require('prompt-sync')();
let activo = true;

function pedirNumero(mensaje) {
   let numero = Number(prompt(mensaje));
    return numero;
}

function calcular(numero1, operacion, numero2) {
    if (operacion === "+") {
        resultado = numero1 + numero2;
    }else if(operacion === "-"){
        resultado = numero1 - numero2;
    }else if(operacion === "*"){
        resultado = numero1 * numero2;
    }else if(operacion === "/"){
        if(numero2 === 0){
            resultado = "No se puede realizar esta operacion";
        }else{
            resultado = numero1 / numero2;
        }
    }else{
        resultado = "Operación no válida";
    }
    return resultado;
}

function mostrarResultado(resultado) {
    console.log(`El resultado es: ${resultado}`);
}

let mensaje1 = "Ingresa el primer número: ";
let mensaje2 = "Ingresa el segundo número: ";
function atenderOperacion(){
    numero1 = pedirNumero(mensaje1);
    operacion = prompt("Ingresa la operación (+, -, *, /): ");
    numero2 = pedirNumero(mensaje2);
    calcular(numero1, operacion, numero2);
    mostrarResultado(resultado);
}

while (activo) {
    atenderOperacion();
    let respuesta = prompt("¿Deseas realizar otra operación? (S/N): ");
    if (respuesta === "N"){
        activo = false;
    }
}
