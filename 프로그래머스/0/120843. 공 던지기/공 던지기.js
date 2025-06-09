function solution(numbers, k) {
    let thrower = (k - 1) * 2; 
    while(thrower - numbers.length > 0){
        thrower -= numbers.length
    }
    return numbers[thrower];
}