let fs = require('fs');
let data = fs.readFileSync(__dirname + '/A-small-practice.in', 'utf8').split('\n');
let start = new Date();
let k = 0;
while (k < 1000) {
    let arr = [];
    let uarr = [];

    Array.prototype.dubleKiller = function () {
        empt = [];
        this.sort();
        for (x = 0; x < this.length; x++) {
            if (this[x] == this[x + 1]) {
                this.slice(x);
            } else {
                empt.push(this[x]);
            }
        }
        return empt;
    }


    for (i = 0; i <= data.length; i++) {
        if (Number.isInteger(+data[i]) || data[i] == undefined) {
            (uarr.length != 0) ? arr.push(uarr) : 0;
            uarr = [];
        } else {
            uarr.push(data[i].split('').dubleKiller().toString().replace(/,/g, ''));
        }
    }


    let longest = 0;
    let val = 0;
    let e = 0;


    for (x of arr) {
        longest = 0;
        val = 0;
        for (i = 0; i < x.length; i++) {
            if (longest < x[i].length) {
                longest = x[i].length;
                val = i;
            }
        }
        e++;
    }
    k++
}
let end = new Date();

console.log((end - start));


