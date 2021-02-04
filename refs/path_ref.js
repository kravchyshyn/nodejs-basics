const path = require('path'); // використовується для роботи зі шляхами в node js

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).name); // 'path_ref'
/*{
    root: '/',
    dir: '/Users/vitaliikravchyshyn/own-projects/nodejs-basics/refs',
    base: 'path_ref.js',
    ext: '.js',
    name: 'path_ref'
} */

// path.basename = забирає назву файлу з абсолютного шляху
// path.dirname = вказує на папку в якій ми знаходимось 
// path.extname = вказує на обєкт в якому ми працюємо
// path.parse = дозволяє працювати з частинами шляху як з обєктом


console.log(path.join(__dirname, 'test', '/second.html')) // використовується для генерації шляху
// /Users/vitaliikravchyshyn/own-projects/nodejs-basics/refs/test/second.hmtl

console.log(path.resolve(__dirname, 'test', '/second.html')); // робить по суті те саме що і join але вміє парсити абсолютний шлях
// /second.hmtl
