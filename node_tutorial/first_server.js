const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("welcome to my home page");
        return;
    }
    if(req.url === "/about"){
        res.end("welcome to about page");
        return;
    }

    res.end(`
        <h1>sorry!!</h1>
        <p>the page you are looking for is not available</p>
        <a href="/">home</a>`);

        // this is a simple 404 page which will be displayed when the user tries to access a page which is not available in our server.
});

server.listen(5000);

// basically this is a simple server which is listening to the port 5000 and when we hit the url "/" it will respond with "welcome to my home page" and when we hit the url "/about" it will respond with "welcome to about page".

// since this is a server it will only send response and not a request, the cliend (browser) is the one which will send the request to the server and the server will respond to the client.

// we can also use the postman to test our server, we can send a get request to the url "http://localhost:5000/" and we will get the response "welcome to my home page" and if we send a get request to the url "http://localhost:5000/about" we will get the response "welcome to about page". or we can test it with thunder client or any other api testing tool.