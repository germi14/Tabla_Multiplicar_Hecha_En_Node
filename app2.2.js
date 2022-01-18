
var colors = require('colors');

const {crearArchivo} = require('./helpers/multiplicar2');
const argv = require('./configYargs/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
 .then (salida => console.log(salida.rainbow, 'creado'.green))
  .catch (err => console.log(err));