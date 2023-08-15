const names = require('./names');
const sayHi = require('./utils');
const data = require('./data')


require('./funcs');

console.log(data);

sayHi('Susan');
sayHi(names.name1);
sayHi(names.name2);