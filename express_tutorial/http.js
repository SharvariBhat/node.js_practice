const http=require('http');
const fs=require('fs');

const homepage=fs.readFileSync('./index.html', 'utf8');

http.createServer((req,res)=>{
    //res.writeHead(200,{'content-type':'text/html'});  -> global, so it will be applied to all responses.


    // this meathod is used to set the header of the response, in this case we are setting the content type to text/html so that we can include html code in the response page, and we give the status code 200 which means that the request was successful.

    // express takes care of all this stuff for us, we just need to send the response and it will take care of the rest. if we don't mention the content-type then it will be set to text/plain by default and we won't be able to include html code in the response page.

    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end(homepage);
    }

    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1> welcome to about page</h1>');
    }

    else if(req.url==='/contact'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1> welcome to contact page</h1>');
    }

    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h1>Page Not Found</h1>');
    }

}).listen(3000);


