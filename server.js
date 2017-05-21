const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const {router: adventureRouter} = require('./logs');

mongoose.Promise = global.Promise;
app.use(bodyParser.json());

const {PORT, DATABASE_URL} = require('./config');

app.use('/logs/', adventureRouter);
