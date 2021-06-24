const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
        if(participant[i]===completion[j]){
            delete participant[i];
            delete completion[j];
        }
    }
}

participant.find((e)=> typeof(e)==='string');