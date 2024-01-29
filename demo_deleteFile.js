var fs = require('fs');
fs.unlink('mynewfile2.txt', function (err){
    if (err) throw err;
    console.log('File Deleted');
    //the fs.unlink() method delete the specified file
});