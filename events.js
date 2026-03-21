const eventEmitter = require("events");

const emitter=new eventEmitter();

emitter.on("login", ()=>{
    console.log("user is logged in");
})

//emitter.emit("login");

// basically this is a simple example of how to use the event emitter in node.js, we are creating an event emitter and then we are listening to the "login" event and when the "login" event is emitted we are logging "user is logged in" to the console.

//we can register multiple listeners for the same event and when the event is emitted all the listeners will be called in the order they were registered.

// we can also pass data to the listeners when we emit the event, for example:

emitter.on("login", (name)=>{
    console.log(`${name} is logged in`);
})

emitter.emit("login", "John");


// .once() method is used to register a listener for an event that will be called only once, the first time the event is emitted. After that, the listener will be removed and will not be called again.

emitter.once("logout", ()=>{
    console.log("user is logged out");
})

emitter.emit("logout");
emitter.emit("logout");