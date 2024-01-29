const http = require('http');

const server = http.createServer((req, res) => {
if (req.url){
    res.write("Welcome to NodeJ!");
   res.end();
}

if (req.url === '/api/courses'){
    res.write(JSON.stringify([1,2,3]));
    //res.write('Hello, view courses');
    res.end();
}

console.log("New connection...");
});
server.listen(3000);

console.log("Listening on port 3000...");