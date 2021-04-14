'use Strict';

export{}

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverseString(toBeReversed: string) {
 let Solution:string= toBeReversed.split("").reverse().join("");
 return(Solution)
}
console.log(reverseString(toBeReversed));