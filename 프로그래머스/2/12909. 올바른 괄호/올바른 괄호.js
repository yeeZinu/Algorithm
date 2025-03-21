function solution(s){
    let count = 0;
    for (let str of s) {
        count += str === '(' ? 1: -1
        if(count < 0) {
            return false
        }
    }
    
    if (count !== 0) {
        return false
    }
    
    return true;
}