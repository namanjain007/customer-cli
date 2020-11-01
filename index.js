const mongoose  = require('mongoose');
const Customer = require('./models/customer');

//map global promise - removing warning
mongoose.Promise = global.Promise;

//connect to mongoose
const db = mongoose.connect('mongodb://localhost:27017/customercli', { useNewUrlParser: true , useUnifiedTopology: true} );

mongoose.connection.once('open',() => {
    console.log('Connected to the database');
});


const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info("new customer added whose name is " , customer.fname , customer.lname);
        db.close();
    }).catch(err => {
        throw err;
    })
};

const findCustomer = (name) => {
    const search = RegExp(name,'i');
    Customer.find({$or : [{fname : search},{lname : search}]}).then(customer => {
        console.info(customer);
        db.close();
    }).catch(err => {
        throw err;
    })
};

module.exports = {
    addCustomer,
    findCustomer
};
