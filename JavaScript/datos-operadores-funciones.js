/* Variables, tipos de datos, operadores logicos y matematicos, funciones */

// Variable: espacio reservado en memoria con un identificador. Para crear variables iempre uso let, sin importar el tipo de dato
let nombre = 'Timo';
let verdadero = true;

// Declaracion, luego valor:
let a,b,c;
a  = 1; 
b = 2;
c = 3;

// const para una variable, es decir que pi no cambia a 3.
const pi = 3.14;

// print: console.log()
console.log('Hola mundo')

// ARRAY = 'Listas'
let ARRAY1 = [1,'timo',true];
console.log(ARRAY1[0])  

let estudiantes = {
    nombre: 'Timoteo',  //propiedad
    edad: 19,

} 

//Operadores logicos y matematicos 
console.log(1+1)//suma resta
console.log('1'-1)
console.log(10/2)//division
console.log(10%2)//resto
console.log(10*2)//20
console.log(10**2)//potencia
//logicos igual que en python
console.log('10' == 10) //comparacion debil ; solo valor
console.log('10' === 10) //comparacion estricta: valor y tipo de dato
console.log('10' == 10) //comparacion debil
console.log('10' !== 10) //comparacion debil
console.log('perro' && 'gato') //and 
console.log('perro' || 'gato') //or 



//tipos de datos, undefined, boolean, number, string, bigint (entero grande), symbol



//funciones/ Hacer funciones
//declaracion
function duplicar(n){
    resultado = n * 2
    return resultado
} 
//invocar (puedo llamarla antes o despues)
console.log(duplicar(8)) 

//ANONIMA, este tipo de funcion, anonima, no las puedo invocar antes, es decir siempre la debo llamar despues de la declaracion
let dividirPor2 = function(n){ return n/2}  

//FLECHA, 
let triplicar = n >= n*3  // '=>' minima expresion de una funcion 
console.log(triplicar(3))


