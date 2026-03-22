const fs=require('fs');
let name="siri";

const ws=fs.createWriteStream('./content/subfolder/3file.txt');

ws.write("hello world\n");
ws.write(`my name is ${name}\n`);

ws.end("this is the end of the file\n");