const mongoose  = require('mongoose');
const Customer = require('./models/customer');

//connect to mongoose
const db = mongoose.connect('mongodb://localhost:27017/customer-cli',{useMongoClient : true});

mongoose.connection.once('open',() => {
    console.log('Connected to the database');
});


const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.log("new customer added");
        db.close();
    }).catch(err => {
        console.log(err);
    })
};

const findCustomer = (name) => {
    const search = RegExp(name,'i');
    Customer.find({$or : [{fname : search},{lname : search}]}).then(customer => {
        console.info(customer);
        db.close();
    }).catch(err => {

    })
}
