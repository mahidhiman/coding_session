let fs = require('fs');

let data = fs.readFileSync(__dirname + '/A-small-practice-1.in','utf8');
data = data.split('\n').filter(a => a);

let i = 1;
let caseNo = 1;

while (i < data.length) {
    let team1 = [];
    let team2 = [];
    let ans = true;
    for(let j = 1; j <= data[i]; j++) {
        let tromblesome = data[i +j].split(' ');
        if (team1.includes(tromblesome[0])) {
            if(team1.includes(tromblesome[1])) {
                ans = false;
                break
            } else if (team2.includes(tromblesome[1])) {
                continue;
            } else {
                team2.push(tromblesome[1]);
                continue;
            }
        } else if (team2.includes(tromblesome[0])) {
            if (team2.includes(tromblesome[1])) {
                ans = false;
                break
            } else if (team1.includes(tromblesome[1])) {
                continue;
            } else {
                team1.push(tromblesome[1]);
                continue;
            }
        } else {
            if (team1.includes(tromblesome[1])) {
                team2.push(tromblesome[0]);
                continue;
            } else if (team2.includes(tromblesome[1])) {
                team1.push(tromblesome[0]);
                continue;
            } else {
                team1.push(tromblesome[0]);
                team2.push(tromblesome[1]);
                continue;
            }
        }
    }
    console.log(`Case #${caseNo} `,ans?"Yes":"No");
    ans?console.log(`Team 1: `, team1, '\nTeam 2:', team2):0;
    i+= Number(data[i]) + 1;
    caseNo++;
}