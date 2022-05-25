const mongoose = require('mongoose');

const getConnection = async () =>{
    try {
        console.log('Inicializando llamado a bd');
    await mongoose.connect('mongodb://skyway:23uKQh8nTKH8Rcp@cluster0-shard-00-00.kmx9g.mongodb.net:27017,cluster0-shard-00-01.kmx9g.mongodb.net:27017,cluster0-shard-00-02.kmx9g.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-i3zcwb-shard-0&authSource=admin&retryWrites=true&w=majority');
    console.log('Estoy conectado');
    } catch(error){
        console.log('Fallo la conexión a la base de datos');
    }
}

module.exports = {
    getConnection,
}