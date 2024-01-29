const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log(totalMemory, freeMemory);

console.log(`Total memory: ${totalMemory} and Free Memory: ${freeMemory} `);