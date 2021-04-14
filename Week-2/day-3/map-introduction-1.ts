'use Strict';

export{}

let map={};

if(Object.keys(map).length===0){
console.log('The map is empty');
}
else{
    console.log('The map is not empty');
}

let keys:number[]=[97,98,99,65,66,67];

map[keys[0]]= "a";
map[keys[1]]= "b";
map[keys[2]]= "c";
map[keys[3]]= "A";
map[keys[4]]= "B";
map[keys[5]]= "C";

console.log(Object.keys(map));

for(let keys in map){
console.log(keys);
}

keys.push(68);
map[keys[6]]="D";

for(let keys in map){
    console.log(keys+" "+map[keys]);
    }

    console.log(map[keys[2]]);

    delete map[keys[0]];

    let answer:string="";
for (let i=0;i<keys.length;i++){
    
    if(keys[i]===100){
        answer=('It has the key 100.');

    }
    else{
       answer=('It dosent have the key 100.');
    }
}
console.log(answer);

for(let i=0;i<keys.length;i++){
delete map[keys[i]];
}
console.log(map);
