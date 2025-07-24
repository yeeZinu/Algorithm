const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 제출용

// 한줄 입력
// const input = fs.readFileSync('ex.txt').toString().split(' ');

// 여러줄 입력
// let [paper, ...input] = fs.readFileSync("ex.txt").toString().split("\n");

let [size, ...arr] = fs.readFileSync("/dev/stdin").toString().split("\n");

let [row, col] = size.split(" ");
arr = arr.map((i) => i.split(""));

const answer = [];

const WHITE = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const BLACK = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function checkWhite(x, y) {
  let cnt = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] === WHITE[i][j]) cnt++;
    }
  }
  return cnt;
}

function checkBlack(x, y) {
  let cnt = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] === BLACK[i][j]) cnt++;
    }
  }
  return cnt;
}

for (let i = 0; i < row - 7; i++) {
  for (let j = 0; j < col - 7; j++) {
    answer.push(checkWhite(i, j));
    answer.push(checkBlack(i, j));
  }
}
console.log(Math.min(...answer));