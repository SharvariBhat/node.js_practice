const path = require('path');

console.log(path.basename(__filename));

console.log(path.sep);

const filepath = path.join("content", "subfolder", "test.txt");
console.log(filepath);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

console.log(path.basename(filepath));