// Sesión de Funciones

/*

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código de JS, esto aplica tanto para variables como para funciones

Como tal, la traducción de Hoisting es elevación, a partir de aqui su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.

Yo puedo invocar una funcion antes de siquiera declararla.

JS, cuando es ejecutado por el motor JS del navegador primero lee e interpreta las variables y las funciones declaradas

Scope:

El concepto scope hace referencia al alcance que tiene una variable dentro de un código JS.

var, let y const

var : global - quiere decir que se puede utilizar o trabajar con esta variable dentro de cualquier parte del código

let : porque además de funcionar de manera global en caso de ser requerida, también puede solo ser utilizada de manera local. 

const : se refiere por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado.

El uso de la palabra reservada "var" no es tan recomendado por el comportamiento y la poca adaptibilidad de una variable.

Entonces, se implementan let y const como una alternativa mucho más eficiente para determinar el Scope o alcance que tiene una variable.


*/

// Funciones, invocación y declaración
/*
palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros - recibe de 0 a n parametro dentro de los paréntesis () obligatorios

establecer el bloque de código sobre el que vamos a trabajar lo hacemos mediante las llaves { código a ejecutar } 
*/


// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro

nuevaFuncion();
function nuevaFuncion (){
    console.log("Buenos días CH28");
}

// Ejemplo de función que si retorna un valor
// también recibe un parámetro

function holaMundo(nombre){
    return "Hola " + nombre;
}

//holaMundo("Pessy");
//console.log(holaMundo("Pessy"));

/*

Elaborar una función que calcule la velocidad de un objeto

- velocidad = distancia / tiempo
- function
- calcularVelocidad
(distancia, tiempo)
- elaborar el bloque de código {}

*/
/*
function calcularVelocidad(distancia, tiempo){ //inicio
    let velocidad = distancia/tiempo;
    return "La velocidad calculada es:"  + velocidad + "m/s";
}//cierre*/

function calcularVelocidad(distancia, tiempo){ //inicio
    return "La velocidad calculada es:"  + distancia/tiempo + "m/s";
}//cierre

console.log(calcularVelocidad());

// Funciones dentro de JS
/*
fUNCIONES FLECHA | fAT ARROW| Funciones lambda

Funciones anonimas
Funciones CallBack - Que recoben otras funciones como parametros

Promesas

Funciones async - await

Son una manera más compacta y sencilla de escribir una función normal

No son lo mismo que una función general, se utiliza en otro tipo de contextos Funciones CallBack que requieren funciones anónimas

Su uso es limitado

Declaración de una función flecha

var, let, const

const - buena práctica utilizar const para declarar funciones flecha o lambda

nombreFuncion 

Parámetros 

Establecer el bloque de código o procesos que va a ejecutar esta función

=> Fat arrow

*/ 

// Función general
function funcionNormal (parametro){
    return "Hola" + parametro;

}

// Función flecha más general
const funcionFlecha = parametro => "Hola" + parametro;

//Funciones flecha más parámetros
const funcionVariosParametros = (datoA,datoB) => {
    let datoC = datoA + datoB;
    return "La suma de datoA + datoB =" + datoC;
}
  
//Funciones flecha sin recibir un parámetro
const funcionSinParametros = () =>{
    return "Función flecha que no recibe parámetros";
}

///////////////////////////////////

// Función flecha para calcular la velocidad

const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
   console.log("Distancia = " + distanciaFlecha+ " metros");
   console.log("Tiempo = " + tiempoFlecha+ " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha;
}

// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/

const elCuadradoDeUnNumero = (numero) => {
    let x = numero;
    return "El resultado es " + x * numero; 
}

    //Fórmula	(0 °C × 9/5) + 32 = 32 °F


const gradosFarenheit = (gradosCelsius) => {
    let gradosFarenheit = gradosCelsius*9/2 + 32;
    return gradosFarenheit + " grados Farenheit";
}


const voltaje = (resistencia,corriente) => {
    let voltaje = resistencia + corriente;
    console.log("Resistencia = " + resistencia+ " ohmios");
    console.log("Corriente = " + corriente+ " amperios");
    return "El voltaje es " + voltaje + " voltios";
}

const volumenDeUnCubo = (lado) => {
    let volumenDeUnCubo = lado*lado*lado;
    return "El volumen de un cubo es " + volumenDeUnCubo + " cm"; 
}

const areaDeUnTriangulo = (base,altura) => {
    let areaDeUnTriangulo = (base * altura)/2;
    return "El área de un triangulo = " + areaDeUnTriangulo;
}

const volumenDeUnaEsfera = (radio) => {
    let volumenDeUnaEsfera = 4/3*3.1416*(radio*radio*radio)
    return "El volumen de una esfera es " + volumenDeUnaEsfera; 
}

const enMayus = (texto) =>{
console.log (texto.toUpperCase());
}