const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    fname : {type : String},
    lname : {type : String},
    age : {type : Number},
    email : {type : String}
});

module.exports = mongoose.model('Customer', customerSchema);