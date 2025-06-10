function solution(code) {
    var answer = '';
    let mode = 0;
    for(let i = 0; i < code.length; i++) {
        if(code[i] === '1' && mode === 0) {
            mode += 1;
            continue;
        }
        if(code[i] === '1' && mode === 1) {
            mode -= 1;
            continue;
        }
        if(mode === 0 && i % 2 === 0){
            answer += code[i];
        }
        if(mode === 1 && i % 2 === 1){
            answer += code[i];
        }
    }
    if(answer.length === 0){
        return 'EMPTY'
    }
    return answer;
}