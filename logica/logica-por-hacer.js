const fs = require(`fs`);
const colors = require(`colors`);
let listadoPorHacer = [];
const guardar = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`./DB/data.json`, data, (err) => {
        if (err) throw new Error(`No se pudo guardar la nota`, err);
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require(`../DB/data.json`);
    } catch (error) {
        listadoPorHacer = [];
    }
}
const Crear = (descripcion) => {
    cargarDB();
    let newNote = {
        descripcion,
        completa: false
    }
    listadoPorHacer.push(newNote);
    guardar();
    return `Nueva nota: ` + colors.green(newNote.descripcion + `\n` + newNote.completa);
}
const getListado = () => {
    cargarDB();
    let listaRec = ``;
    if (listadoPorHacer == null) {

    } else {
        listadoPorHacer.forEach(element => {
            listaRec += colors.green(`=================Por Hacer========================`) +
                `\n${element.descripcion}\n${element.completa}\n` +
                colors.green(`==================================================\n`);
        });
    }
    return listaRec;
}
const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(elemento => elemento.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completa = completado;
        guardar();
        return `La tarea ${listadoPorHacer[index].descripcion} se a completado`;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(elemento => elemento.descripcion !== descripcion);
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardar();
        return `Se borro la tarea ${descripcion}`;
    }

}
module.exports = {
    Crear,
    getListado,
    actualizar,
    borrar
}