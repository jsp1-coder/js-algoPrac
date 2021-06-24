const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];


const hashMap = new Map();

for (let i = 0; i < participant.length; i++) {
    hashMap.set(i,participant[i]);
}


for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
       if(hashMap.get(i)===completion[j]){ 
       hashMap.delete(i);
       delete completion[j];
    }
}
}

const answer = hashMap.values().next().value;