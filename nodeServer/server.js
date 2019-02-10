const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const port = 3000;
const hostname = '127.0.0.1';

app.use(express.static('./ui/static'));
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    console.log(Date(), req.url);
    res.sendFile(path.join(__dirname + '/index.html'));
});

const server = http.createServer(app);
server.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
