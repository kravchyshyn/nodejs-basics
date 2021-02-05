// console.log(process.argv); //
// node console.js message=hello spec=false
// Result:
// '/usr/local/bin/node',
//   '/Users/vitaliikravchyshyn/own-projects/nodejs-basics/console.js',
//   'message=hello',
//   'spec=false'

function consoleToJSON() {
    const c= {}

    for(i = 2; i < process.argv.length; i++ ) {
        const arg = process.argv[i].split('=');

        c[arg[0]] = arg[1] ? arg[1]: true;
    }

    return c;
}

console.log(consoleToJSON())