const { Router} = require ('express');

const router = Router();

router.get('/', function(req, res){
    res.send('Estoy desde tipo equipo GET');
});


router.post('/', function(req, res){
    res.send('Estoy desde tipo equipo POST');
});


router.put('/', function(req, res){
    res.send('Estoy desde tipo equipo PUT');
});

module.exports = router;