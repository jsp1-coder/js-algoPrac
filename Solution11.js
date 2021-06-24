const S = "2-5g-3-J";
const K = 2;
const answer = [];
const ss = S.split('-').join('').split('');

const num = Math.floor(ss.length / K); 
const remainder = ss.length % K;
let count = 0;

for (let word of ss) {
   word = word.toUpperCase();
}


if(remainder!== 0){
    for (let i = 0; i < remainder; i++) {
      answer[i] = ss[i]; 
    }

    for (let j = remainder; j < ss.length; j++){
        if(j % K === 1) {
            answer[j] = '-';
            count++;
        } else {
            answer[j] = ss[j+count];
        }
    }
}