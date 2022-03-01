const express = require('express');
const config = require('config');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())


app.listen(config.get('api.porta'), () => console.log("It's working"))