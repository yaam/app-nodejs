const {Router} = require('express');
const router = Router();
const Usuario = require('../modelos/Usuario');

router.post('/', async function(req, res){
    
    try{
    console.log('objeto recibido',req.body);
    
    const existeUsuario = await Usuario.findOne({email: req.body.email});
    console.log('Respuesta existe usuario', existeUsuario);    
    if(existeUsuario){
        return res.send('Email ya existe')
    }

    let usuario = new Usuario();
    usuario.nombre =req.body.nombre;
    usuario.email = req.body.email;
    usuario.estado = req.body.estado;
    usuario.fechaCreacion = new Date();
    usuario.fechaActualizacion = new Date();

    usuario= await usuario.save();

    res.send(usuario);
    }catch(error){
            console.log(error);
            res.send('Ocurrio un error');
    }
    
});

router.get('/', function(req, res){
    res.send('Hola mundo estoy en crear usuario');
});

router.put('/', function(req, res){
    res.send('Hola mundo estoy en crear usuario');
});


module.exports = router;