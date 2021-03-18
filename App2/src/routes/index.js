const router = require('express').Router();

const helloRoute = require('./hello');

router.use('/hello', helloRoute);

router.get('/estoyvivo', (req, res) => {
    res.send({ status: "Sí estoy vivo"})
});

module.exports = router;