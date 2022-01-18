
const fs = require('fs');
var colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

try {
    
    let salida = '';
    let salidaConsola = '';
    
    for (let num = 1; num <= hasta; num++) {
        salida += `${base} x ${num} = ${base * num}\n`;
        salidaConsola += `${base} ${'x'.yellow} ${num} ${'='.yellow} ${base * num}\n`;
    }

    if(listar){
    console.log(`====================================================`.red);
    console.log(`        Tabla de multiplicar del`.white, colors.red(base), `hasta el`, colors.red(hasta)   );
    console.log(`====================================================`.red);

    console.log(salidaConsola);
    }
      fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
      
      return (`tabla-${base}.txt`)

} catch (err) {
    throw err;
    }
    
};

module.exports = {
    crearArchivo
}