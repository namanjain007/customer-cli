const { program } = require('commander');
const { addCustomer , findCustomer} = require('./index');

program
    .version('1.0.0')
    .description('Customer Management System')

program
    .command('add <fname> <lname> <phone> <email>')
    .alias('a')
    .description('add new customer command')
    .action((fname, lname, phone, email) => {
        addCustomer({fname, lname, phone, email});
    })


program
    .command('find <fname>')
    .alias('fi')
    .description('find customer command')
    .action((fname) => {
        findCustomer(fname);
    })

program.parse(process.argv);