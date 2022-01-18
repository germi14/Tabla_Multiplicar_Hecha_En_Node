
const {crearArchivo} = require('./helpers/multiplicar')

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .check( (argv, options) => {
                    if ( isNaN (argv.b) ){
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .argv;

console.clear();

/* Opcion usando el procces.arg que es manipulando la consola pero nativamente

const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base=5] = arg3.split('=');
console.log(base); 


const base = 5;


crearArchivo(base)
 .then (salida => console.log(salida, 'creado'))
  .catch (err => console.log(err));

// Esta manera funciona, pero no es la mejor, ya que el programa es muy propenso a fallar, debido a como se la destructuracion del objeto
// que viene de la consola llamado process.argv, entonces hay una mejor forma de hacerlo. y es instalando y usando el paquete yargs

*/

// Opcion con yargs




console.log(argv); // El argv es una constante que defini y que recibe un objeto proviente de la consola al usar require('yargs').argv
//console.log(argv.base); // como es un objeto, entonces accedo a su porpiedad con el nombre que se guarda en este caso base, y asi 
                        // accedo solo al valor

//Este paquete externo yargs ya viene hecho para hacer muchas cosas en la consola, y es mucho mas facil y mejor utilizarlo que hacerlo
// como en la primera opcion, ya que aqui con menos codigo hacemos lo mismo, y tambien es menos propenso a errores, y tambien
// me hace el metodo --help solito 

crearArchivo(argv.b, argv.l)
 .then (salida => console.log(salida, 'creado'))
  .catch (err => console.log(err));