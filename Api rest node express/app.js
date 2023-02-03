
const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (requestAnimationFrame.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listenerCount(3000);
console.log('Listening on port 3000...');