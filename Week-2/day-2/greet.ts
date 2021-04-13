'use strict';

export{}

let nameToGreet:string="Greenfox";
let greet=function(nameToGreet: string){
nameToGreet="Greetings,dear "+nameToGreet
return(nameToGreet);
}
console.log(greet(nameToGreet));