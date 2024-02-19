// Create web Server
const http = require('http');
const server = http.createServer((req, res) => {
     // handle requests here
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, World!');

});

server.listen(3000, () => {
     console.log('Server is running on port 3000');
});
