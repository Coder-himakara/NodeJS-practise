const {parse} = require('csv-parse'); //import csv-parse module
//Before pasring the csv file, we need to read the file from our system
const fs = require('fs'); //node inbuilt module to read files
//define file system functionality to read the file
//File read as a stream which emits events.Events are used to read the file  piece by piece.
//Every time a piece is read, the data event is emitted.So we can process the data in chunks.
const results = []; //to store the data in the form of array
fs.createReadStream('greenhouse_gas.csv')
    .pipe(parse({
        delimiter: ',', //specify the delimiter
        columns: true //specify the columns
    }))
    .on('data',(data)=>{
        results.push(data);//store the data in the array
    })
    .on('error',(err)=>{
        console.log(err);//print the error
    })
    .on('end',()=>{
        console.log(results);//print the data
        console.log('done');
    });
