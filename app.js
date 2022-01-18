
const fs = require('fs');  //(I)

console.clear();

const base = 3;

console.log(`====================================================`);
console.log(`                   Tabla del ${base}   `);
console.log(`====================================================`);

const tabla = [1,2,3,4,5,6,7,8,9,10];

let salida = '';

for (let num of tabla) {
    salida += `${base} x ${num} = ${base * num}\n`;
}

console.log(salida);

// 1era Opcion
// fs.writeFile( `tabla-${base}.txt`, salida, (err) => {      //(II)
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creado`);
// } )

// 2da Opcion

fs.writeFileSync( `tabla-${base}.txt`, salida);      //(III)

console.log(`tabla-${base}.txt creado`);

// En este ejercicio utilizamos un paquete que ya viene instalado en node, el cual es File System, este paquete te permite leer y escribir
// en la pc, en este ejercicio se creo un documento de texto .txt con la tabla de multiplicar del 1, 3 y 5.
// Primero hay que importar el paquete, eso se hace en I con require, debo guardar esto en una variable.
// luego para utilizar el paquete guardado en la variable, debo llamar a la variable y aplicar uno de los metodos o propiedades
//heredados del paquete,
// Ejemplo 1 = En este caso como queremos crear un archivo, usamos .writeFile, este metodo nos pide tres argumentos,
// el primero el nombre y la extension de lo que queremos crear, el segundo lo que le vamos a mandar a ese archivo, y tercero una funcion
// callback para cuando ocurra un error.
// Ejemplo 2 = En este caso queremos crear lo mismo que en la opcion 1, pero si usamos .writeFileSync, este metodo arroja de una vez
// la salida si todo esta bien, no tiene opcion de error, en el caso que quisieramos usar la opcion de un posible error, tendriamos que
// usar try y catch, como se usaron en las promesas