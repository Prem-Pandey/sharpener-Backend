const http = require('http');

const server = http.createServer((req, resp) => {
    console.log("Prem Ranjan Pandey");
    
    // console.log(req)
    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head><title>my first page</title></head>');
    resp.write('<body><h1>Prem Ranjan Pandey</h1></body>');
    resp.write('</html>');
    resp.end();
    process.exit
    
});

server.listen(4000)