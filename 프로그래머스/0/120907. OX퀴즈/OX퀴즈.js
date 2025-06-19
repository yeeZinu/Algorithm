function solution(quiz) {
    var answer = [];
    for(let i of quiz){
        let numArr = i.split(' ');
        let sum = Number(numArr[0]);
        let result = Number(numArr[4]);
        if(numArr[1] == '+'){
            
            if(sum + Number(numArr[2]) === result){
                answer.push("O");
            }
            else answer.push("X");
        }
        else{

            if(sum - Number(numArr[2]) === result){
                answer.push("O");
            }
            else answer.push("X");
        }
    }
    return answer;
}