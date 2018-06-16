const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const config = require('./config');
const apiRoutes = require('./routes/api');
const testMiddleware = require('./middlewares/test.js');

const app = express();
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';
let allowOrigin = '';

env === 'production' ? allowOrigin = 'https://website.com' : allowOrigin = '*';

app.use(favicon(path.join(__dirname, '/public/favicon.ico')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization');
  // res.setHeader('Access-Control-Max-Age', 86400);
  next();
});

if (env !== 'production') app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', testMiddleware, express.static(path.join(__dirname, 'public')));
app.use('/api', testMiddleware, apiRoutes)

app.listen(port, () => {
  console.log('>>> Env:', env);
  console.log('>>> Listening on port', port);
})
