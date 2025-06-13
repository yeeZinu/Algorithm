function solution(sides) {
    let max = Math.max(...sides);
    var answer = sides.reduce((a, b) => a + b, 0);
    return (answer - max) <= max ? 2 : 1;
}