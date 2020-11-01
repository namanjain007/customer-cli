const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    fname : {type : String},
    lname : {type : String},
    phone : {type : String},
    email : {type : String}
});

module.exports = mongoose.model('Customer', customerSchema);