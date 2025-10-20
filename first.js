const {program } = require('commander');

program
    .description('a program to repeat what you say')
    .option('-a, --alpha', 'Alpha')
    .option('-b, --beta,  ','nothing much','foo');


program.parse();

const options = program.opts();
console.log('Options detected: ')

if (options.alpha) console.log('alpha');
 
const beta = !options.beta ? 'no' : options.beta;
console.log('beta is: %s', beta);