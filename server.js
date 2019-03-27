
const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
 


app.get('/', (req, res) => {
  //res.send('Hola Mundo')

  /*let salida = {
    nombre: 'Pablo',
    edad: 20,
    url:req.url
    }*/

    //res.send(salida);
    res.render('home',{
        nombre: 'pablo boNNaluc'
    });

})

app.get('/about', (req, res) => {
    //res.send('Hola Mundo')
  
    /*let salida = {
      nombre: 'Pablo',
      edad: 20,
      url:req.url
      }*/
  
      //res.send(salida);
      res.render('about');
  
  })

 
app.listen(port,() => {
    console.log(`Escuchando en el puerto ${port}`);
});