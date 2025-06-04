const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let star = '*';
    for(let i = 1; i <= input; i++){
    console.log(star.repeat(i));
    }
});