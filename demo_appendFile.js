var fs = require ('fs');
fs.appendFile('mynewfile.txt', '\nNext is about fs.writeFile.', function (err){
if (err) throw err;
console.log('Done!');
});