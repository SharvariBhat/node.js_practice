const fs=require('fs');

const readstream=fs.createReadStream('./content/subfolder/2file.txt', 'utf-8');

readstream.on('data', (chunk)=>{
    console.log(chunk);
})

readstream.on('end', ()=>{
    console.log("file reading is completed");
})