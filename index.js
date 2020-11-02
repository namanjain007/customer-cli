const mongoose  = require('mongoose');
const Customer = require('./models/customer');

const url = 'mongodb://127.0.0.1:27017/customercli'

//connect to mongoose
mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true} );

const db = mongoose.connection;

// db.once('open', _ => {
//     console.log('Database connected:', url)
//   })

//   db.on('error', err => {
//     console.error('connection error:', err)
//   })

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
