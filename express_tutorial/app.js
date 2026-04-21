const http=require('http');
const fs=require('fs');

const homepage=fs.readFileSync('./index.html', 'utf8');
const homestyle=fs.readFileSync('./navbar-app/styles.css','utf-8');
const homeimage=fs.readFileSync('./navbar-app/logo.svg');
const homelogic=fs.readFileSync('./navbar-app/browser-app.js');


http.createServer((req,res)=>{
    
    if(req.url==='/index.html'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end(homepage);
    }

    else if(req.url==='/about.html'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1> welcome to about page</h1>');
    }

    else if(req.url==='/contact.html'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1> welcome to contact page</h1>');
    }

    else if(req.url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.end(homestyle);
    }

    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.end(homeimage);
    }

    else if(req.url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.end(homelogic);
    }

    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h1>Page Not Found</h1>');
    }

}).listen(3000);


