const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 제출용

// 한줄 입력
// const input = fs.readFileSync('ex.txt').toString().split(' ');

// 여러줄 입력
// let input = fs.readFileSync("ex.txt").toString().split("\n");

let N = +fs.readFileSync("/dev/stdin").toString().split(" ");

let cnt = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + cnt);
    break;
  }

  if (N < 0) {
    console.log(-1);
    break;
  }
  cnt++;
  N -= 3;
}
