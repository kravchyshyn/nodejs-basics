const EventEmitter = require('events');


// EventEmitter 
// - додає нам функціонал емітити і слухати певні події

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger();

logger.on('message', data => {
    console.log('data: ', data);
});

logger.log('Hello from');
logger.log('Hello from2');
logger.log('Hello from3');



class Dog extends EventEmitter {
    voice(times) {
        this.emit('voice', `${times} hav`);
    }
}

const dog = new Dog();

dog.on('voice', (data) => {
    console.log(data);
})

dog.voice(20);
dog.voice(10);
