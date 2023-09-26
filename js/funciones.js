//funcion que no recibe parametros y no retorna nada
function saltodelinea() {
    document.write("<br> <br> <br>");
}

//funcion que recibe un parametro y no retorna nada
function imprimir(frase) {
    document.write(frase);
    saltodelinea();
}

//imprimir("Maria");
//imprimir("Velázquez");
//imprimir("Delgado");
//imprimir(25);


//funciones que reciben parametros y retornan valores

function calculadoraIMC(nombre,peso,estatura) {
    let imc = peso/(estatura*peso);
    imprimir("El IMC de " + nombre+ "es de: " + imc);
}

let nombre = prompt("¿Cuál es tu nombre?");
let peso = prompt("¿Cuál es su peso?");
let estatura = prompt("Cuál es su estatura?");

calculadoraIMC(nombre,peso,estatura);














//document.write("Maria Macrina");
//saltodelinea();
//document.write("Velázquez");
//saltodelinea();
//document.write("Delgado");
