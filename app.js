const express = require('express')
const hbs = require('hbs');
require('dotenv').config()


const app = express()
let port = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alejandro Barrera',
        titulo: 'Practicando Ando',
        pollo: 'Listo el pollo 0>'
    })

})

app.use(express.static('public'))

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Alejandro Barrera',
        titulo: 'Practicando Ando',
        pollo: 'Listo el pollo 0>'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alejandro Barrera',
        titulo: 'Practicando Ando',
        pollo: 'Listo el pollo 0>'
    })
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port)