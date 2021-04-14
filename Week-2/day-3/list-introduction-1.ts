'use Strict';

export{}


let list:string[]=[];

console.log(list.length);

list.push('William');

if (list.length===0){
console.log('It is empty');
}
else{
    console.log('It is not empty');
}

list.push('Jhon','Amanda');

console.log(list.length);

console.log(list[2]);

for(let i=0;i<list.length;i++){

    console.log(list[i]);
}

for(let i=0;i<list.length;i++){

    console.log((i+1)+". "+list[i]);
}

list.splice(1,1);
console.log(list);

list.reverse();

console.log(list);

list.splice(0);

console.log(list);
