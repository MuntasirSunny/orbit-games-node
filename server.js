require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4400;

const server = http.createServer(app);
server.listen(port);