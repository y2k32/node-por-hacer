const argv = require(`yargs`)
    .command("crear", `Crea una nueva tarea`, {
        descripcion: {
            alias: `d`,
            demand: true
        }
    })
    .command(`actualizar`, `Actualiza el estado de una tarea por su descripcion`, {
        descripcion: {
            alias: `d`,
            demand: true
        },
        completado: {
            alias: `c`,
            default: true
        }
    })
    .command(`borrar`, `Elimina una tarea por descripcion`, {
        descripcion: {
            alias: `d`,
            demand: true
        },
    }).help().argv;
const colors = require(`colors`);
module.exports = {
    argv,
    colors
}