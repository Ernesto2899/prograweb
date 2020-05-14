const express = require('express');
const app = express();
const port = 3000;


//Evitar revelar el contenido de los directorios a nuestro servidor
app.use(('/assets'), express.static(__dirname + '/public'));

//route hanlder para la raiz
app.get('/',(req,res)=>{
    res.send('<html><head><title>Page Title</title></head><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html> ');
});

//route handler para /person
app.get('/person/:id',(req,res)=>{
    res.send(`<html>
    <head>
    <link href=/assets/style.css type=text/css rel=stylesheet>
    <title>Page Title
    </title></head><body><h1>El id de la persona es ${req.params.id}</h1><p>My first paragraph.</p></body></html>`);

});

app.listen(port, ()=>{
    console.log(`Escuchame en el puerto ${port}`);

});