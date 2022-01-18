
const fs = require('fs');
var colors = require('colors');
// 1era Opcion Usando promesas
// const crearArchivo = ( base = 5) => {

// return new Promise( (resolve,reject) => {

//     console.log(`====================================================`);
//     console.log(`                   Tabla del ${base}   `);
//     console.log(`====================================================`);
    
//     const tabla = [1,2,3,4,5,6,7,8,9,10];
    
//     let salida = '';
    
//     for (let num of tabla) {
//         salida += `${base} x ${num} = ${base * num}\n`;
//     }
//       console.log(salida);

//       fs.writeFileSync( `tabla-${base}.txt`, salida);

//         (salida)
//             ?resolve (`tabla-${base}.txt`)
//             : reject(`No existe la tabla para est ${id}`);
//     })


// };

// 2da Opcion usando async await
const crearArchivo = async( base = 5, listar = false) => {

try {

    const tabla = [1,2,3,4,5,6,7,8,9,10];
    
    let salida = '';
    
    for (let num of tabla) {
        salida += `${base} ${'x'.yellow} ${num} ${'='.yellow} ${base * num}\n`;
    }

    if(listar){
    console.log(`====================================================`.red);
    console.log(`                   Tabla del`.white, colors.red(base)   );
    console.log(`====================================================`.red);

    console.log(salida);
    }
      fs.writeFileSync( `tabla-${base}.txt`, salida);
      
      return (`tabla-${base}.txt`)

} catch (err) {
    throw err;
    }
    
};

module.exports = {
    crearArchivo
}