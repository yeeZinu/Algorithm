const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 제출용

let [hour, minute] = input[0].split(" ").map(Number);

if (59 < minute + Number(input[1])) {
  hour = hour + Math.floor((minute + Number(input[1])) / 60);
  minute = (minute + Number(input[1])) % 60;
} else {
  minute += Number(input[1]);
}

if (minute >= 60) {
  hour += 1;
  minute -= 60;
}

if (hour >= 24) {
  hour -= 24;
}

console.log(hour, minute);
