const express = require('express');
const bodyparser = require('bodyparser');
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
app.get('/person/:id', (req, res) => {
    res.render('person', {
    ID: req.params.id,
    Qstr: req.query.Qstr
    });
    });

app.listen(port, ()=>{
    console.log(`Escuchame en el puerto ${port}`);

});

app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thanks');
    console.log(req.body.firstname);
    console.log(req.body.lastname);

    });
