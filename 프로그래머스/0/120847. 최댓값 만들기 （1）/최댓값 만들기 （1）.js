function solution(numbers) {
    let sortNum = numbers.sort((a,b) => b - a);
    return sortNum[0] * sortNum[1];
}