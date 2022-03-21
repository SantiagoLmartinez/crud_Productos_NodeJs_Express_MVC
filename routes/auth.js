const express = require('express')
const router = express.Router()

router.get('/productos', (req, res) => {
    res.render('productos');
}) 

router.get('/contacto', (req, res) =>{
    res.render('contacto')
})

module.exports = router