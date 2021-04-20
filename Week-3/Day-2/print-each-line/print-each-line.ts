'use Strict';

export{}

const fs = require('fs');

let fileContent: string="";
try{
fileContent = fs.readFileSync('my-file.txt','utf-8');
}
catch(error){
    console.log("Unable to read file: my-file.txt");
}
console.log(fileContent);