const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 제출용

// 한줄 입력
// const input = fs.readFileSync('ex.txt').toString().split(' ');

// 여러줄 입력
// let input = fs.readFileSync("ex.txt").toString().split("\n");

let [num, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
