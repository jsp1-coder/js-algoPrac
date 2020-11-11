const array = [1,5,2,6,3,7,4];
const commands = [[2,5,3],[4,4,1],[1,7,3]];

const answer = [];

for (let i = 0; i < commands.length; i++) {
   for (let j = 0; j < 1; j++) {
      let num = array.slice(commands[i][j]-1,commands[i][j+1]).sort((a,b)=>a-b);
      answer.push(num[commands[i][2]-1]);
   }
}
