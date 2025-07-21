const fs = require("fs");

let [paper, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용

// 한줄 입력
// const input = fs.readFileSync('ex.txt').toString().split(' ');

// 여러줄 입력
// let [paper, ...input] = fs.readFileSync("ex.txt").toString().split("\n");

input = input.map((i) => i.split(" "));

const arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 0; i < paper; i++) {
  let startX = +input[i][0]; // parseInt 대신 +
  let startY = +input[i][1];

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if (arr[startX + j][startY + k] == 1) {
        continue;
      }
      arr[startX + j][startY + k] = 1;
      count++;
    }
  }
}

console.log(count);
