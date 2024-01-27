const { response, request } = require('express');
const Conexion = require('../database/ConexionSequelize');

const usuarioGet = (req, res = response) => {
    const conx = new Conexion();

    conx.getlistado()
        .then( msg =>{
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch ( err => {
            console.log('No hay registros.')
            res.status(203).json({'msg': 'No se han encontrado registros'});
        });
}

const usuarioPost = (req, res = response) => {
    const conx = new Conexion();
    const nuevoUsuario = req.body;

    conx.crearUsuario(nuevoUsuario)
        .then( msg =>{
            console.log('Usuario creado correctamente!');
            res.status(201).json(msg);
        })
        .catch ( err => {
            console.log('Error al crear el usuario.')
            res.status(500).json({'msg': 'Error al crear el usuario.'});
        });
}

const usuarioPut = (req, res = response) => {
    const conx = new Conexion();
    const usuarioActualizado = req.body;

    conx.actualizarUsuario(usuarioActualizado)
        .then( msg =>{
            console.log('Usuario actualizado correctamente!');
            res.status(200).json(msg);
        })
        .catch ( err => {
            console.log('Error al actualizar el usuario.')
            res.status(500).json({'msg': 'Error al actualizar el usuario.'});
        });
}

const usuarioDelete = (req, res = response) => {
    const conx = new Conexion();
    const idUsuario = req.params.id;

    conx.borrarUsuario(idUsuario)
        .then( msg =>{
            console.log('Usuario borrado correctamente!');
            res.status(200).json(msg);
        })
        .catch ( err => {
            console.log('Error al borrar el usuario.')
            res.status(500).json({'msg': 'Error al borrar el usuario.'});
        });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
};