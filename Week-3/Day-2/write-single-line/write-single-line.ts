'use Strict';

export{}

const fs = require('fs');

let fileContent = 'Molnár Máté Titusz';
try{
fs.writeFileSync('my-file.txt', fileContent);
}
catch(error){
    console.log("Unable to write file: my-file.txt");
}