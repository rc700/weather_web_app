const express = require('express');
const axios = require('axios');

const app = express();

const api_url = 'Belfast,uk'
const url_1 = 'http://api.openweathermap.org/data/2.5/weather?q='
const url_2 = '&APPID=c29c705123528d7ad5585d0e256486c7'

app.use(express.static('static'));

app.get('/weather', function(req, res){
    var city = req.query.city;
    axios.get(url_1 + city + url_2).then(function(response){
        res.send(response['data'])
    })
});

app.listen(3000);