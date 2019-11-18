const Logger = require('logplease');
const isEven1 = require('./numbers');
const logger1 = Logger.create("logger1", { color: Logger.Colors.Yellow });
const logger2 = Logger.create("logger2", { color: Logger.Colors.Red });
var red     = Logger.create('red', { color: Logger.Colors.Red, showTimestamp: false, showLevel: false });

const n1=2
 console.log(isEven1(n1) === true ?logger1.info(`${n1} is even`):red.error(`${n1} is odd`))

 const n2=3
 console.log(isEven1(n2) === true ?logger1.info(`${n2} is even`):red.error(`${n2} is odd`))