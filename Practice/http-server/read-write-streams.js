const fs = require('fs');

//creating readable stream
const readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//creating writable stream
const writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//listener to console log the data 
//listener to copy data from one file to another using buffer
let chunkCounter = 0;
readStream.on('data', function(chunk){
    chunkCounter++;
    console.log('new chunk recieved: ');
    // console.log(chunk);
    writeStream.write(chunk);
});
// readStream.on('error', function(err) {
//     console.log("Error Occured: " + err);
// });

//setTimeout has to set as the above operations are occuring asynchronously
setTimeout(() => {
    console.log(`${chunkCounter} of chunks of data copied !`)
}, 100);