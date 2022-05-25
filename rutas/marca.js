const {Router} = require ('express');

const router = Router();

router.get('/', function(req, res){
    res.send('Estoy desde marcas GET');
});


router.post('/', function(req, res){
    res.send('Estoy desde marcas POS');
});


router.put('/', function(req, res){
    res.send('Estoy desde marcas POST');
});

module.exports = router;