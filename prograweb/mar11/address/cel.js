const request = require('request')

var fahrenheitToCelsius = require('fahrenheit-to-celsius');
 

const url = 'https://api.darksky.net/forecast/9ad05cb4121051c2bb2bafe1eadbaa4c/19.2433,-103.725?lang=es'

request({ url:url, json:true }, (error, response) => {
    //si el key value perk tiene el mismo nombre pueden quitar y solo dejar uno { url:url} ={url}
    //el error es por si acaso un erro pero el responde es el que te da el resultado
   
    //const data = JSON.parse(response.body)
    //console.log(data.currently);
    console.log(fahrenheitToCelsius(data.currently.temperature))
    //console.log(fahrenheitToCelsius(response.body.currently.temperature))
    console.log(response.body.daily.data[0].summary)
})