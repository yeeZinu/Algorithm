function solution(a, b) {
    const num1 = String(a) + String(b);
    const num2 = String(b) + String(a); 
    if(Number(num1) >= Number(num2)) {
        return Number(num1);
    }
    else {
        return Number(num2);
    }
}