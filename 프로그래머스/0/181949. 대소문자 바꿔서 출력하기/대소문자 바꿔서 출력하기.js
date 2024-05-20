const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = '';

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let x of str){
        if(x === x.toLowerCase()){
            result += x.toUpperCase();
        }
        else{
            result += x.toLowerCase();
        }
    }
    console.log(result);
});