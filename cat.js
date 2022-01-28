//accept name of the command: cat bash.js
//read the name of the file 

const fs = require('fs');

const cat = () => {
    process.stdout.write('prompt > ');

    process.stdin.on('data', (data) => {
        let cmdArr = data.toString().trim().split(' ');
  
        if (cmdArr[0] === 'cat') {
            fs.readFile(cmdArr[1], 'utf8', (err, content) => {
                if (err) {
                    throw err
                } else {
                    process.stdout.write(content);
                    process.stdout.write('\n' + 'prompt > ');
                }
            });
        }
    });
}

module.exports = {
    cat
}