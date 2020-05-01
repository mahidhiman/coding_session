let fs = require('fs');

let data = fs.readFileSync(__dirname + '/p5.in','utf8');
data = data.split('\n').filter(a => a);

let i = 1; 

while (i < data.length) {
    let k = data[i];
    let j = 0;
    let l;
    while (l = Math.floor(Math.log2(k)) ) {
        k = 2**(l+1) - k;
        if(k == 2**l) break;
        j++;
    }
    console.log(`Case #${i} `, j%2);
    i++
}