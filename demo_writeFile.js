var fs = require('fs');

fs.writeFile('mynewfile1.txt', 'This is NodeJs in action. Welcome', function (err){
if (err) throw err;
console.log('Saved!')

//Create new file using the writeFile() method.
//Replaces the content of the file
//Create a new file if it doesnt exist
});