const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    if(req.query.message===undefined){
        res.json({error: "I am groot"})
    }

  res.status(200).json({message: req.query.message, translated: "I am groot"})
});

module.exports = app;