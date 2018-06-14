var Company = require("../models/company");
var exports = module.exports = {};

exports.companiesGet = function(req, res){
    Company.find(function(err,companies){
        if(err) res.send(err);
        res.json(companies);
    });
};

exports.companiesPost = function(req,res){
    var company=new Company();
    company.company_id=req.body.company_id;
    company.name=req.body.name;

    company.save(function(err){
        if(err) res.send(err);

        res.json(company);
    });
};

exports.companyGet = function(req,res){
    Company.findById(req.params.company_id, function(err,company){
        if(err) res.send(err);
        res.json(company);
    });
};

exports.companyPost = function(req,res){
    Company.findByIdAndUpdate(req.params.company_id,
        {
            company_id:req.body.company_id,
            name:req.body.name,
        }, 
        function(err,company){
            if(err) res.send(err);
            res.json(company);
    });
};

exports.companyDelete = function(req,res){
    Company.findByIdAndRemove(req.params.company_id,function(err,company){
        if(err) res.send(err);
        res.json(company);
    });
};