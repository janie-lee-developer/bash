let findPath = require('./pwd.js');
let listItems = require('./ls.js');
let readFile = require('./cat.js');
let readWeb = require('./curl.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    let cmdArr = data.toString().trim().split(' ');

    if (cmdArr[0] === 'cat') {
        readFile.cat(cmdArr[1]);
    } else if (cmdArr[0] === 'pwd') {
        findPath.pwd();
    } else if (cmdArr[0] === 'ls') {
        listItems.ls();
    } else if (cmdArr[0] === 'curl') {
        readWeb(cmdArr[1]);
    }
})
// findPath.pwd();

// listItems.ls();

// readFile.cat();