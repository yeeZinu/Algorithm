function solution(my_string) {
    let moum = ['a','i','o','e','u'];
    var answer = '';
    for(let i of my_string){
        if(moum.indexOf(i) == -1){
            answer += i;
        }
    }
    return answer;
}