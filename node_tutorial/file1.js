const num = 5;
if(num<10){
    console.log("The number is less than 10");
}else{
    console.log("The number is greater than or equal to 10");
}

console.log("hey this is my first node js code");

const variable = setInterval(() => {
    console.log("helloooo");
},2000);

setTimeout(() => {
    clearInterval(variable);
},10000);

console.log(__dirname);
console.log(__filename);