const strings = ['sun', 'bed', 'car'];
const n = 1;

const answer = strings.sort((a,b)=>{
    if (a.split('')[n] < b.split('')[n]) return -1 
    else if ( a.split('')[n] > b.split('')[n] ) return 1 
    else {
        for (let i = 0; i < a.split('')[n].length > b.split('')[n].length? a.split('')[n].length : b.split('')[n].length; i++) {
            
            
            if(a.split('')[i] > b.split('')[i]) {
                return 1
            } 
            else if(a.split('')[i] < b.split('')[i]) {
                return - 1
            } 

        }
    } 
    
});
