const express = require('express')
const { create } = require('express-handlebars')
const app = express()

// const hbs = create({extname: '.hbs', partialsDir: ['views/components']})
const hbs = create({extname: ".hbs", partialsDir: ["views/components"],});

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './views')


// app.get('/',(req,res) =>{
//     const productos = [
//         {nombre : "Televisor", marca : "Philips", modelo: "32 Pulgadas",  precio : "1000"},
//         {nombre : "Celular", marca : "Samsung", modelo: "A31",  precio :  "2000"},
//         {nombre : "Celular", marca : "Motorola", modelo: "Z play 2",  precio : "3000"},
//     ]
//     res.render('home', {productos})
// })

// middleware
app.use(express.static(__dirname + "/public"))
app.use('/', require('./routes/home'))
app.use('/auth', require('./routes/auth'))

app.get('/',(req,res) =>{ res.send('Servidor Activo')})


app.listen(5000, () => console.log('Server on'))