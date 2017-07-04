const express = require('express');
const axios = require('axios');

const app = express();

const api_url = 'http://api.openweathermap.org/data/2.5/weather?q=Belfast,uk&APPID=c29c705123528d7ad5585d0e256486c7'

app.use(express.static('static'));

app.get('/weather', function(req, res){
    axios.get(api_url).then(function(response){
        res.send(response['data'])
    })
});

app.listen(3000);