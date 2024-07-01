import http from "http";


const server = http.createServer((req, res) => {
    // console.log(req.url);

    if(req.url === "/"){
        res.writeHead(200, "OK", {"Content-Type":"text/html"});
        res.end("<h1>Home</h1>");
    }
    else if(req.url === "/about"){
        res.writeHead(200, "OK", {"Content-Type":"text/html"});
        res.end("<h1>About Page</h1>");
    }
    else if(req.url === "/contact"){
        res.writeHead(200, "OK", {"Content-Type":"text/html"});
        res.end("<h1>Contact Page</h1>");
    }
    else{
        res.writeHead(404, "BAD", {"Content-Type":"text/html"});
        res.end("<h1>Routing By Sri Sakthi!</h1>");
    }
});

server.listen(8000, () => console.log("Server Up!"));
