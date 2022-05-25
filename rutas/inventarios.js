const {Router} = require('express');
const Inventario = require('../modelos/Inventario');
const router = Router();
const {validarInventario} = require('../helpers/validar-inventario');
//http://localhost:3000/inventario
//GET http://localhost:3000/inventario
//POST //http://localhost:3000/inventario
//PUT //http://localhost:3000/inventario

router.get('/', async function(req, res){
    // req.param.id
    // req.body
    // console.log(req,params);
    try {
        const inventarios = await Inventario.find().populate([
        {
            path: 'usuario', select: 'nombre email estado'
        },
        {
            path: 'marca', select: 'nombre estado'
        },
        {
            path: 'tipoEquipo', select : 'nombre estado'
        },
        {
            path: 'estadoEquipo', select : 'nombre estado'
        }    
        ]);
        res.send(inventarios);
    }catch(error){
        console.log(error);
        res.status(500).send('Ocurrio un error en el servidor');
    }
});

router.post('/', async function(req, res){
    //console.log(req,body);
    try{
        const validaciones = validarInventario(req);

        if(validaciones.length >0){
            return res.status(400).send(validaciones);
        }
        const {serial, modelo, descripcion, foto, precio, 
            usuario, marca, tipoEquipo, estadoEquipo, fechaCompra} = req.body;
        
            let inventario = await Inventario.findOne({serial: req.body.serial});
            if(inventario){
                return res.status(400).send('El serial ya existe');
            }
            const fechaActual = new Date();

            inventario = new Inventario();
            inventario.serial = serial;
            inventario.modelo = modelo;
            inventario.descripcion = descripcion;
            inventario.foto = foto;
            inventario.precio = precio;
            inventario.usuario = usuario._id;
            inventario.tipoEquipo = tipoEquipo._id;
            inventario.estadoEquipo = estadoEquipo._id;
            inventario.marca = marca._id;
            inventario.fechaCompra = fechaCompra;
            inventario.fechaCreacion = fechaActual;
            inventario.fechaActualizacion = fechaActual;
            inventario = await inventario.save();
            res.send(inventario); 

    }catch(error){
        console.log(error);
        res.status(500).send('Ocurrio un error en el servidor');
    }
});

router.put('/:inventarioId', async function(req, res){
    try{
        let inventario = await Inventario.findById(req.params.inventarioId);
        // si no existe inventario no actualizo
        if(!inventario){
                return res.status(404).send('No existe el inventario');
            }

        const {serial, modelo, descripcion, foto, precio, 
            usuario, marca, tipoEquipo, estadoEquipo, fechaCompra} = req.body;
            
            //Buscame por serial pero distinto al inventario que estoy actualizando
            const inventarioExisteSerial = await Inventario
             .findOne({serial: serial, _id: {$ne: invetario._id}});
            if(inventarioExisteSerial){
                return res.status(400).send('El serial ya existe');
            }
            const fechaActual = new Date();

            
            inventario.serial = serial;
            inventario.modelo = modelo;
            inventario.descripcion = descripcion;
            inventario.foto = foto;
            inventario.precio = precio;
            inventario.usuario = usuario._id;
            inventario.tipoEquipo = tipoEquipo._id;
            inventario.estadoEquipo = estadoEquipo._id;
            inventario.marca = marca._id;
            inventario.fechaCompra = fechaCompra;
            //Datos transacionales
            inventario.fechaActualizacion = fechaActual;
            inventario = await inventario.save();
            res.send(inventario); 

    }catch(error){
        console.log(error);
        res.status(500).send('Ocurrio un error en el servidor');
    }
});

module.exports = router;