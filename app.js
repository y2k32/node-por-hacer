//const argv = require(`yargs`).argv;

//Desestructuracion de objetos
let { argv, colors } = require(`./config/config-yargs`);
let { Crear, getListado, actualizar, borrar } = require(`./logica/logica-por-hacer`);
let comando = argv._[0];
switch (comando) {
    case `listar`:
        console.log(`Lista de tareas por hacer`);
        console.log(getListado());
        break;
    case `crear`:
        console.log(`Creando una nueva tarea...`);
        let mensaje = Crear(argv.descripcion);
        console.log(mensaje);
        break;
    case `actualizar`:
        console.log(`Actualizando tarea...`);
        console.log(actualizar(argv.descripcion, argv.completado));
        break;
    case `borrar`:
        console.log(`Borrando tarea...`);
        console.log(borrar(argv.descripcion));
        break;
    default:
        console.log(`"${colors.red(comando)}" No es un comando valido`);
        break;
}