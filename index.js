const express = require('express');
const app = express();

const cors = require('cors');
const ConnectDb = require('./config/db');

ConnectDb();

const bodyParser = require('body-parser');
const Api = require('./api');

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
// parse application/json
app.use(bodyParser.json());
// app.use('/api', Api);
const corsOptions = { origin: true }; // exposedHeaders: "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type" };
app.use(cors(corsOptions));
app.options('*', cors());
Api(app);

const port = 8282;
app.listen(port, '0.0.0.0');

module.exports = app;
