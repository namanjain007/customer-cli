const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    fname : 'String',
    lname : 'String',
    phone : 'String',
    email : 'String'
});

module.exports = mongoose.model('Customer', customerSchema);