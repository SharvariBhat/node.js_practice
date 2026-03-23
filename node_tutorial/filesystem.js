const fs = require("fs");

for(let i=0;i<1000;i++){
    fs.writeFile('./content/subfolder/2file.txt', `hello world ${i}\n`, {flag: 'a'}, (err)=>{
        if(err){
            console.log(err);
        }    
    });
}

//flag: 'a' is used to append the data to the file instead of overwriting it. If the file does not exist, it will be created.