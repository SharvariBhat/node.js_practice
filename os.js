const osvar = require('os');

// info about current user
const user = osvar.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${osvar.uptime()} seconds`);

const currentOs = {
    name: osvar.type(),
    release: osvar.release(),
    totalMem: osvar.totalmem(),
    freeMem: osvar.freemem()
};
console.log(currentOs);