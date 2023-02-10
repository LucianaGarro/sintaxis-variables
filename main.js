/**Reglas básicas para trabajar con JS */
/** SINTAXIS */

//1)Recordar que lo que es la navegador lee de arriba hacia abajo. 
//2)En JS podemos incluir comentarios:
/* comentario en bloque: si sigo escribiendo abajo no va a ser en forma de comentario si lo cerramos, si no lo cierro lo que sigo escribiendo abajo va a ir en forma de comentario*/
//comentario en línea: lo que siga abajo se va a tomar como comentario sin pongo//
//3) En JS no se tienen en cuenta los espacios en blanco pero son una buena práctica.
//4) JS es caseSensitive: distingue entre minúsculas y mayúsculas.

// let estoEsUnaVariable
// console.log(estoEsUnaVariable); //camelCase
// let estoesunejemplo //esto no se hace, es un HORRRRROR!

//5) Podemos terminar cada línea de código sin " ;", PERO es una buena práctica para acostumbrarse, por convención y por si tengo que pasar a otro lenguaje en otro momento. 

//6) TENER CUIDADO CON LAS PALABRAS RESERVADAS AL MOMENTO DE DECLARAR VARIABLES, ETC. 

//** Existen en JS varios tipos de datos, entre ellos los denominados PRIMITIVOS */

// 151515 ES UN TIPO DE DATO NUMÉRICO = NUMBER
//"Hola chicos, no spoileen" : lo voy a distinguir por las comillas (se pueden usar comillas simples o dobles) Un string es una cadena de caracteres.

//true or false: son tipos de datos booleanos. Puede tomar dos valores, verdadero o falso. Estos valores los va a tomar en base a una condición.

//null: valor que es nulo

//undefined: un valor que todavía no está definido. 

//*Variables*/
//Son espacios de memorias que reservamos para almacenar información que nos va a servir para la ejecución de nuestro programa
//Pasos
//Siempre la voy a declarar con la palabra reservada "let"
//let 457Alumno las variables en JS no pueden empezar con números
//let nombre Alumno las variables no pueden tener espacios ni caracteres especiales
//El sistema admite la ñ, pero no es recomendado. 
//Forma correcta:

//let nombreAlumno FORMA CORRECTA!!!!!!!!!

//El paso siguiente es asignarle un valor a esta variable:

nombreAlumno = "Luciana";
console.log(nombreAlumno);
nombreAlumno = "Orne";
console.log(nombreAlumno);

//En este caso, al usar un mismo nombre de variable, se sobreescribe con el segundo valor.

// Inicializar una variable: Esto implica declarar una variable y al mismo tiempo declararle un valor.

let nombre = "Firulais";
console.log(nombre);

let hambre = false;
console.log(hambre);

//**Constantes */
// Una const recibe una ÚNICA asignación al momento de su declaración, impide que su valor se modifique posteriormente. 
//las voy a utilizar para datos que no voy a cambiar en el código.

const iva = 1.21; //JS no va a admitir , para decimales, va a utilizar .
const anioDeNacimiento = 1992; 

//* Operaciones básicas con variables *//

//Sumar dos valores y calcular un promedio

// let numeroUno = 8;
// let numeroDos = 10;

// let promedio = (numeroUno + numeroDos) /2;
// console.log(promedio);

//Si quiero restar voy a usar - y si quiero multiplicar voy a usar *

//Puedo concatenar datos: puedo unir la información almacenada en las variables y mostrar un único mensaje. 

let nombreCliente = "Ricardo Fort";
let valorCompra = "10000000000";

let mensaje = (nombreCliente  +  " gastó en su compra $$ " + valorCompra);
console.log(mensaje);

//**Sentencia Prompt y alert */
//Prompt: mostrar un cuadro de diálogo en el navegador para que el usuario ingrese un dato. Nosotros le vamos a proporcionar una pregunta/mensaje al usuario y este colocará una respuesta en este cuadro.

let nombreAlumnoNuevo = prompt("¿Cómo te llamas alumno nuevo?");
console.log (nombreAlumnoNuevo);

//Ejercicio:
//prompt nos toma como dato un string, para hacer operaciones cuando toma número tengo que hacer una conversión de string a number: "parsear". Con esta acción (parse) cambio el tipo de dato.
//Para esto utilizo la palabra reservada Int (números enteros) y float (números decimales)

let notaPrimerParcial = parseInt(prompt("Ingrese nota del primer parcial : "));
let notaSegundoParcial = parseInt(prompt("Ingrese nota del segundo parcial: "));
console.log( "El alumno:  " + nombreAlumnoNuevo + " ha sacado en su primer parcial: " + notaPrimerParcial + " y en su segundo parcial ha sacado una nota de: " + notaSegundoParcial);


//prompt toma el dato que ingresa la persona como STRING. Si ingresa un número lo toma también como un string. Para que no lo tome como string y yo podes usarlo para hacer una operación, cambio en tipo de dato de strin a number por medio de la sentencia "parseInt o parseFloat"

//Alert: me muestra un mensaje en el navegador pero no le da opciones de interacción al usuario.
let mensajeDespedida = "Buen finde chicos";
alert (mensajeDespedida);

//Calcular el promedio de dos notas de un alumno pidiendo los datos por teclado (usando prompt);









