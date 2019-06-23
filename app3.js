// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             defualt: 10
//         }

//     })
//     .command('crear', 'Crea archivo con la tabla', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             defualt: 10
//         }

//     })
//     .help()
//     .argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite).then(resp => {
                console.log(`**********************`.green);
                console.log(`***TABLA ${argv.base}****`.green);
                console.log(`**********************`.green);
                console.log(resp);
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}



//let argv2 = process.argv;

//console.log(argv.base);
//console.log(argv2);