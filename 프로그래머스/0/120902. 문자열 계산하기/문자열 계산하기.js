function solution(my_string) {
    let numArr = my_string.split(" ");
    let answer = Number(numArr[0]);
    for (let i = 1; i < numArr.length; i+=2){
        if(numArr[i] == '+'){
            answer += Number(numArr[i+1]);
        }
        else{
            answer -= Number(numArr[i+1]);
        }
    }
    return answer;
}