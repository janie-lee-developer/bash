const request = require('request');

module.exports = (address) => {

    request(address, function (error, response, body) {
        if (error) {
            throw error
        } else {
            process.stdout.write('statusCode: ', response && response.statusCode);
            process.stdout.write('\n'+ 'body: ', body);
            process.stdout.write('\n'+ 'prompt > ');
        } 
    });
}


// module.exports = (address) => {
//     process.stdin.on('data', (data) => {
//         let cmdArr = data.toString().trim().split(' ');

//         if (cmdArr[0] === 'curl') {

//             request(cmdArr[1], function (error, response, body) {
//                 if (error) {
//                     throw error
//                 } else {
//                     process.stdout.write('statusCode: ', response && response.statusCode);
//                     process.stdout.write('\n'+ 'body: ', body);
//                     process.stdout.write('\n'+ 'prompt > ');
//                 } 
//             });
//         }
//     })
    
// }