let fs = require('fs');

let data = fs.readFileSync(__dirname + '/A-small-practice.in','utf8');
data = data.split('\n').filter(a => a);
let start = new Date();
let k =0;
while (k < 1000) {
let i = 1;
let caseNo = 1;
while (i < data.length) {
    let j = 0;
    let participants = [];
    while (j < data[i]) {
        participants.push(data[i + j + 1])
        j++
    }
    let longest = null;
    for (let i = 0; i < participants.length; i++) {
        longest = longest?sort(longest, participants[i]) >0? participants[i]: longest: participants[i];
    }
    caseNo++;
    i += Number(data[i]) + 1;
}
k++
}
let end = new Date();

console.log((end - start));


function sort (a, b) {
    let a_len = 0;
    let b_len = 0;
    for (let i = 0; i < a.length ; i++) {
        if (a.slice(0, i).includes(a[i])) continue;
        else a_len++;
    }
    for (let i = 0; i < b.length ; i++) {
        if (b.slice(0, i).includes(b[i])) continue;
        else b_len ++;
    }
    if (a_len !== b_len) return b_len - a_len;
    else return b - a;
}