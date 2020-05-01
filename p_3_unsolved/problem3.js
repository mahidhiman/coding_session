const fs = require('fs');

let data = fs.readFileSync(__dirname + '/3-input.in', 'utf8');

let data = data.split('\n').filter(a => a);

let i = 1;
let caseNo = 1;
while (i < data.length) {
    let j = 0;
    let [n, k] = data[i].split(/ +/);
    let strings = [];
    while (j < data[i]) {
        strings.push(data[i + j])
        j++
    }
    strings.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; a < n; a += Number(k)) {
        for (let j = i; j < k + i; j++) {

        }
    }
    caseNo++;
    i += Number(data[i]) + 1;
}