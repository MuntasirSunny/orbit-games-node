require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
let ejs = require('ejs');

router.get('/test', (req, res, next) => {

    res.status(200).json("Home, Success!");

});

router.get('/', (req, res, next) => {

    res.render("home.ejs", {home: "home-value"});

});

module.exports = router;
