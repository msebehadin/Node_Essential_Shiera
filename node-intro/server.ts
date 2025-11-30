
const http = require('http');


const port = 3000;

// 2. Create the server
const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    
    res.end('Welcome to Node.js!');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

