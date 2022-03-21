const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    const productos = [
        {nombre : "Televisor", marca : "Philips", modelo: "32 Pulgadas",  precio : "1000"},
        {nombre : "Celular", marca : "Samsung", modelo: "A31",  precio :  "2000"},
        {nombre : "Celular", marca : "Motorola", modelo: "Z play 2",  precio : "3000"},
    ]
    res.render('home', {productos})
})


router.get('/auth/productos', (req, res) =>{
    const productos = [
        {nombre : "Televisor", marca : "Philips", modelo: "32 Pulgadas",  precio : "1000"},
        {nombre : "Celular", marca : "Samsung", modelo: "A31",  precio :  "2000"},
        {nombre : "Celular", marca : "Motorola", modelo: "Z play 2",  precio : "3000"},
    ]
    res.render('productos', {productos})
})


    module.exports = router