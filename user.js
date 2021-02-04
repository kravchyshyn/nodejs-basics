const orgObj = require('./org');
const user = {
    name: 'Vitalii',
    age: 29
}

// console.log(org);

module.exports = {
    user, 
    org: orgObj,
    sayHello () {
        console.log('Hello');
    },
};