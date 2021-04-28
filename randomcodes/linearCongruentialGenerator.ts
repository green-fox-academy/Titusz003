'use strict'

let m = 25; //m-nek nagyobbnak kell lennie mint a és c
let a = 11; // a-1 nek oszthatónak kell lennie m-nek az egyik prím osztójával
let c = 17; // c és m-nek nem lehetnek közös prím osztói
let now = new Date // a rendszeridő aktuális állása
let seed:number = now.getTime() //rendszeridő számmá alakítása


function randomNumberGenerator(){

    seed = (a * seed + c) % m;
    return seed/m;  // ha elosztjuk m-el a végeredményt, akkor 0 és 1 között kapunk számokat, ha nem akkor 0 és m között kapunk egész számokat
}

for(let i=0;i<20;i++){
    console.log(randomNumberGenerator())
    }