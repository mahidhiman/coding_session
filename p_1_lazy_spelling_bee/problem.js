let str = '';

str = str.split('');

total = 1;
for (let i =0; i < str.length; i++) {
    if (i === 0) {
        if (str[i] !== str[i + 1]) total *=2;
    } else if (i === str.length - 1) {
        if (str[i] !== str[i - 1]) total *=2;
    }
    else {
        let r = 1;
        if (str[i] !== str[i+1]) r++;
        if (str[i] !== str[i - 1]) r++;
        total *= r;
    };
}
console.log(total)