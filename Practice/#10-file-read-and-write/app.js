//Generally the module name and the variable name both are same
var fs = require('fs');

// // fs.readFileSync
// // Sync' part allows the node to read the file synchronusly meaning all file is read first before going through other code. 
// var sample = fs.readFileSync('sample.txt','utf8');
// // utf8 is encoding format| you can find clean explanation here at http://stackoverflow.com/a/15128103/5388823 
// console.log(sample);

// // this line of code creates an another file output.txt and writes the data in sample into the log.
// fs.writeFileSync('output.txt',sample);


// creating newFolder and newSample.txt
fs.mkdir('newFolder', function(){
    fs.readFile('sample.txt', 'utf8', function(err, data){
        console.log(`data : ${data}`);
        fs.writeFile('./newFolder/newSample.txt', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!')
        });
    });
});

//deleting old txt file and newFolder dir
// adding setTimeout since rmdir and mkdir was occuring asynchronously
setTimeout(function(){
    fs.unlink('./newFolder/newSample.txt' , function(){
        fs.rmdir('newFolder', (err) => {
            if (err) throw err;
            console.log('The file has been deleted!')
        });
    })
}, 50);