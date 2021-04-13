'use strict';

export{}

let len=4;
let matrix = [];

for(let i=0; i<len; i++) {
    matrix[i] = [0];
    for(let j=0; j<4; j++) {
        matrix[i][j] = 0;
    }
}
for(let k=0;k<len;k++){
    matrix[k][k]=1
}
console.table(matrix);
console.log(matrix[1][2])