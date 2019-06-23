const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        defualt: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', opts)
    .command('crear', 'Crea archivo con la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv: argv
}