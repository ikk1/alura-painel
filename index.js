require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    
    var uri = `https://www.alura.com.br/api/dashboard/${process.env.ALURA_API_KEY}`;

    const resp = await fetch(uri);
    const data = await resp.json();
    const {courseProgresses, guides} = data;
    res.json(guides).status(200);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});