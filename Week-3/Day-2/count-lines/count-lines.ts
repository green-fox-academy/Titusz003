'use Strict';

export{}

const fs= require('fs');

let counter=function(fileContent:string){
    try{
        fileContent = fs.readFileSync(fileContent, 'utf-8');
        console.log(fileContent.length);
    }
        catch(error){
            console.log(0)
        }
}

counter('file.txt')
