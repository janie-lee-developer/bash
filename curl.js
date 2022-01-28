const request = require('request');

module.exports = () => {
    request('http://www.google.com', function (error, response, body) {
        console.log('body:', body);
    });
}