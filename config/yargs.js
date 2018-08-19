const opts = {
    base: {
        demand: true,
        alias: 'b',
        description: 'Es la base en la que se calculará la tabla'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar de la base enviada', opts)
    .help()
    .argv;

module.exports = {
    argv
}