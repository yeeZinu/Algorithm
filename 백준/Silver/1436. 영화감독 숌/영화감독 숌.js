const fs = require("fs");

// 제출용
let input = +fs.readFileSync('/dev/stdin').toString().split(' ');

// 한줄 입력
// const input = fs.readFileSync('ex.txt').toString().split(' ');

// 여러줄 입력
// let [paper, ...input] = fs.readFileSync("ex.txt").toString().split("\n");

let cnt = 1;
let num = 666;

while (cnt !== input) {
  num++;

  if (String(num).includes("666")) {
    cnt++;
  }
}

console.log(num);
