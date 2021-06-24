const S = "2-5g-3-J";
const K = 2;

let ss = S.replace(/-/g,'').toUpperCase();

/*
let count = 0;
*/

const num = Math.floor(ss.length / K); 
const remainder = ss.length % K;

let answer = remainder? [ss.slice(0, remainder)] : [];

for (let i = remainder; i < num+remainder+1; i= i+K) {
    answer.push(ss.slice(i,i+K));
}

