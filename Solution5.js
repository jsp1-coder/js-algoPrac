const numbers = [2,1,3,4,1];


const sums = [];

for (let i = 0; i < numbers.length-1; i++) {
    for (let j = i+1; j < numbers.length; j++) {
        sums.push(numbers[i]+numbers[j]);
    }
}

const answer = sums.reduce((unique, num)=>{
   return unique.includes(num)? unique : [...unique, num];
},[]).sort((x,y)=>{
    if(x>y) return 1;
    if(x<y) return -1; 
});

console.log(answer);