export {}

let a: number = 24;
let output1: number = 0;

if(a%2===0){
output1++
};

console.log(output1);

let b: number = 13;
let output2: string = '';

if(b<20 && b>10){
output2='Sweet!';
}
else if(b<10){
output2='Less!';
}
else{
output2='More!';
}
console.log(output2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if(c>=50 && isBonus===false) {
    c-=2;
}
else if(c<50 && isBonus===false){
    c--;
}
console.log(c);

let d: number =  8;
let time: number = 120;
let output3: string = '';

if(d%4===0 && time<=200){
    output3='check';
}
else if(time>200){
    output3='Time out';
}
else {
    output3='Run Forest Run!';
}

console.log(output3);