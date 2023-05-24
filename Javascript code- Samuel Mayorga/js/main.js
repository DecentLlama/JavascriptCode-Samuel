console.log("Hello World!");

//alert("Bienvenido a Javascript");
/*
Comentario Multilinea

let nombre = prompt("¿Cual es tu nombre?");

console.log(parseInt(nombre));

console.log(typeof(nombre));

 Clase 23/05/2023{
let numeroUno = prompt("Ingresa un número");
let numeroDos = prompt("Ingresa otro número");

let resultadoSuma = parseInt(numeroUno) + parseInt(numeroDos);

console.log(`El resultado de la suma es: ${resultadoSuma}`);

let resultadoResta = parseInt(numeroUno) - parseInt(numeroDos);

console.log(`El resultado de la resta es: ${resultadoResta}`);

let resultadoMultiplicacion = parseInt(numeroUno) * parseInt(numeroDos);

console.log(`El resultado de la multiplicacion es: ${resultadoMultiplicacion}`);

let resultadoDivision = parseInt(numeroUno) / parseInt(numeroDos);

console.log(`El resultado de la division es: ${resultadoDivision}`); 
 }
*/

//Dados dos numeros identificar cual numero es mayor
//cual es menor o si son iguales

/*let numeroUno = prompt("Ingresa un numero");
let numeroDos = prompt("Ingresa otro numero");

if(numeroUno>numeroDos){
    console.log(`El numero ${numeroUno} es mayor que ${numeroDos}`);
}else if(numeroDos>numeroUno) {
    console.log(`El numero ${numeroDos} es mayor que ${numeroUno}`);
}
else{
    console.log(`El numero ${numeroUno} es igual a ${numeroDos}`);
}
*/
//Dado un numero identificar si un numero es par o impar

let numeroUno = prompt("Ingresa el valor deseado");
let resultado = parseInt(numeroUno) % 2;
if(resultado==0){
    console.log(`El numero ${numeroUno} es par`);
}else{
    console.log(`El numero ${numeroUno} es impar`);
}