const argv = require('./config/yargs').argv;
var colors = require('colors/safe');



// requireds
// const fs = require('fs');
// const fs = require('fs'); no son nativos, paquetes que crean otras personas
// const fs = require('../fs'); archivos que nosotros escribimos y deben estar en algun lado de nuestro proyecto

//cuando hay llaves luego de const o let significa destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado : ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}







// console.log(process.argv);
// let argv = process.argv;




// let parametro = argv[2];
// let base = parametro.split('=')[1]; //transformar de string a arreglo





// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado : ${archivo}`))
//     .catch(e => console.log(e));