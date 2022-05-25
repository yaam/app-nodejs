const {Router} = require ('express');

const router = Router();

router.get('/', function(req, res){
    res.send('Estoy desde estado equipo GET');
});

router.post('/', function(req,res){
    res.send('Estoy desde estado equipo POST');
});

router.put('/', function(req, res){
    res.send('Estoy desde estado equipo PUT');
});

module.exports = router;