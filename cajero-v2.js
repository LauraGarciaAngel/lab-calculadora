const prompt = require('prompt-sync')();
let activo = true
function pedirNumero(mensaje) {
   let numero = Number(prompt("Ingrese un numero: "));
    return numero
}
function calcular(numero1, operacion, numero2) {
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
    }else{
        resultado = "Operación no válida"
    }
    return resultado
}
function mostrarResultado(resultado) {
    console.log(`El resultado es: ${resultado}`)
}
function atenderOperacion(){
    numero1 = pedirNumero();
    operacion = prompt("Ingrese el signo de operacion: ");
    numero2 = pedirNumero();
    calcular(numero1, operacion, numero2);
    mostrarResultado(resultado)

}

while (activo) {
    atenderOperacion()
    let respuesta = prompt("Desea realizar otra operación (S/N) ")
    if (respuesta === "N"){
        activo = false
    }
}
