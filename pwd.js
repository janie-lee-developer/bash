const pwd = () => {
    process.stdout.write('prompt> ');

    process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    //pwd command
    if (cmd === 'pwd') {
        // console.log(__dirname);
        process.stdout.write('You are at: ' + __dirname);
        console.log('\n' + process.cwd());
        //how to add a new line? /n?
    }

    //Repeat Input
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');
    });
}

module.exports = {
    pwd
};
