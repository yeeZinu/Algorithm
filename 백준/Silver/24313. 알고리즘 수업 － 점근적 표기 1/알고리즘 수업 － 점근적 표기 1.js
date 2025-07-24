const fs = require("fs");

let [a, c, n] = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용

// 한줄 입력
// const input = fs.readFileSync('ex.txt').toString().split(' ');

// 여러줄 입력
//let [a, c, n] = fs.readFileSync("ex.txt").toString().split("\n");

let [a1, a0] = a.split(" ").map(Number);

let fn = a1 * parseInt(n) + a0;
let gn = +c * parseInt(n);

if (fn <= gn && Number(c) >= a1) {
  console.log(1);
} else {
  console.log(0);
}
