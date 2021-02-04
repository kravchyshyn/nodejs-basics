// console.log('Hello world', __dirname, __filename);

// __dirname - вказує на директорію в якій ми ведемо розробку
// Users/vitaliikravchyshyn/own-projects/nodejs-basics
// __filename - вказує на файл в якому ми ведемо розробку
// Users/vitaliikravchyshyn/own-projects/nodejs-basics/index.js

// const obj = require('./user');

// console.log(obj);

// console.log(obj.sayHello());


// Використовуєтьсядля створення та налаштування власного сервера
const http = require('http')

const server = http.createServer((req, res) => {
    console.log('starting');
    console.log(req.url);

    res.write('<h1>Hello from NodeJS</h1>');
    res.write('<h2>Hello from NodeJS</h2>');
    res.write('<h3>Hello from NodeJS</h3>');
    res.end(`
        <div style="background: orange; width:200px; height:200px">
            <h2>Test</h2>
        </div>
    `);
});

server.listen(5000, () => {
    console.log('Server is running');
});