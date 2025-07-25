const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 제출용

// 한줄 입력
// const input = fs.readFileSync('ex.txt').toString().split(' ');

// 여러줄 입력
// let input = fs.readFileSync("ex.txt").toString().trim()split("\n");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("").map(Number);
input.sort((a, b) => b - a);
console.log(input.join(''));

