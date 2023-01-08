const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors())
app.get('/',  (req, res) => {
    return res.json({ message: 'Okay' })
})

app.listen('2811') //Limite de numeros para a porta observar é de '5'??
console.log('Server is okay')