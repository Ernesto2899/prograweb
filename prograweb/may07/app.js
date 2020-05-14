const express = require('express');
const app = express();
const port = 3000;


//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));


//route handler para la raiz
app.set('view engine', 'ejs');

//app.get('/',(req,res)=>{
//    res.render('index');
//});

//route handler para obtener un dato del querystring /person
app.get('/person/:id',(req,res)=>{
   // res.send(`<html> <head> <link href=/assets/style.css type=text/css rel=stylesheet> <title>Page Title </title></head><body><h1>El id de la persona es ${req.params.id}</h1><p>My first paragraph.</p></body></html>`);
     
   res.render('index', {ID: req.params.id});
});

app.listen(port, ()=>{
    console.log(`Escuchame en el puerto ${port}`);

});