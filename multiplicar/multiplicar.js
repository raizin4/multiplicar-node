const fs = require('fs');
var colors = require('colors');



let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {


        console.log('==============='.green);
        console.log(`== Tabla de ${base}==`.gray);
        console.log('==============='.red);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }

    })


}




// module.exports.crearArchivo otra forma de usar export
let crearArchivo = (base, limite = 10) => { //funcion crearArchivo
        //promesa basica
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`el valor introducido ${base} no es un numero`);
                return
            }
            let data = '';

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i}\n`;
            }
            //fs.writeFile para guardar la tabla en la direccion que indique
            fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, (err) => {

                if (err)
                    reject(err);
                else
                    resolve(`tabla-${base}-al-${limite}.txt`)
            });
        });

    }
    //modo de usar export mas recomendable
module.exports = {
    crearArchivo,
    listarTabla
}