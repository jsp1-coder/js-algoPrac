let n = 5;
const lost = [2,4];

const students = [1,2,3,4,5];

const reserve = [3];


const count = [];

// count 배열을 학생수 만큼 1로 채우기.
for (let i = 0; i < n; i++) {
    count[i] = 1;
}

// 잃어버린 사람은 -1, 하나 더 있는 사람은 +1
for (let i = 0; i < lost.length; i++) {
    count[lost[i]-1]--;    
}
for (let j = 0; j < reserve.length; j++) {
    count[reserve[j]-1]++;    
}

for (let i = 0; i < count.length-1; i++) {
    if(count[i]<1){
        if(count[i+1]>1) {
            count[i+1]--;
            count[i]++;
    } else if (count[i-1]>1){
        count[i-1]--;
        count[i]++;
    }
}
}

let answer = 0;
console.log(count);

for (let i = 0; i < count.length; i++) {
    if(count[i]>=1) answer++;
}

console.log(answer);