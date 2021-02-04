const os = require('os');
// const path = require('psth');

// operarion system


//Platform
console.log(os.platform()); // darwin it means Mac OS

//OS  Architecture
console.log(os.arch()); // x64


//General Info -інформацйія по процесорам
console.log(os.cpus()); // x64
/*
[
    {
      model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
      speed: 2600,
      times: { user: 14968360, nice: 0, sys: 6682750, idle: 64621290, irq: 0 }
    },
    {
      model: 'Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz',
      speed: 2600,
      times: { user: 1588760, nice: 0, sys: 404680, idle: 84220290, irq: 0 }
    },
]*/

// Скільки вільної памяті на компі
console.log(os.freemem());

// Загальна память на компі
console.log(os.totalmem());

// корнева директорія
console.log(os.homedir());

// cкільки система вже працює
console.log(os.uptime());


// інформація про користувача
console.log(os.userInfo());
