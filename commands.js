const { program } = require('commander');
const { prompt } = require('inquirer');

const { addCustomer , findCustomer} = require('./index');

const questions = [
    {
        type : 'input',
        name : 'fname',
        message : 'customer first name'
    },
    {
        type : 'input',
        name : 'lname',
        message : 'customer last name'
    },
    {
        type : 'input',
        name : 'phone',
        message : 'customer phone number'
    },
    {
        type : 'input',
        name : 'email',
        message : 'customer email'
    }
];

program
    .version('1.0.0')
    .description('Customer Management System')

// program
//     .command('add <fname> <lname> <phone> <email>')
//     .alias('a')
//     .description('add new customer command')
//     .action((fname, lname, phone, email) => {
//         addCustomer({fname, lname, phone, email});
//     })

program
    .command('add')
    .alias('a')
    .description('Adding new Customer into database')
    .action(() => {
        prompt(questions)
            .then(answers => {
                addCustomer(answers);
            })
            .catch(err => {
                throw err;
            })
    })

program
    .command('find <fname>')
    .alias('fi')
    .description('find customer command')
    .action((fname) => {
        findCustomer(fname);
    })

program.parse(process.argv);