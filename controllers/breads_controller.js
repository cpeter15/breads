const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads');

breads.get('/', (req, res) => {
    res.render('Index',
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
    // res.send(Bread);
});

module.exports = breads;