
// Hola Mundo
// Esto es lo bueno de typescript, que podemos ver los errores
// Y tambien es similar a JavaScript, por lo que es facil de aprender
// No hace falta poner ";", pero es buena practica ponerlo al final de cada linea
// Typescript es un superconjunto de JavaScript, por lo que podemos usar todas las funcionalidades de JavaScript


console.log("Hola TypeScript");

// Aca puedo ver toda la documentación de typescript
// Importante leerlo para mejroar en esto, aunque es similar que javascript
// https://www.typescriptlang.org/docs/


// Sintaxis como trabajar en typescript

// Comentarios

/*
varias lineas de comentarios
*/

// VAriables

var myString = "Esto es una cadena de texto";
// myString = 5 daría un error, proque infiere que es un string, y no se puede asignar un numero a un string
console.log(myString);

let myString2: string = "Esto es otra cadena de texto";
console.log(myString2);

myString2 = "Esto es otra cadena de texto modificada";
console.log(myString2);
console.log(typeof myString2);

// aca podemos utilizar tambien interfaces

let myNumber = 7;
myNumber = myNumber + 1;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber - 2);

console.log(myString + " " + myNumber);

let myNumber2 = 10.5;
console.log(myNumber2);
console.log(typeof myNumber2);

let myBoolean: boolean = true;
console.log(myBoolean);
console.log(typeof myBoolean);

// any lo podemos utilizar cuanedo un valor de un dato no es fijo
// es mejor utilizarlo en javasdript
// myBoolean: any = ;


// Si algo no esta definido
// no le podemos dar valor si no esta indefinido
let myUndefined: undefined = undefined;
console.log(myUndefined);
console.log(typeof myUndefined);