var mongoose = require('mongoose');
var schema = mongoose.Schema;

var CompanySchema = new schema({
    company_id : String,
    name : String,
    address : String
});

module.exports = mongoose.model("Company",CompanySchema);