var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');


var router=express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/",router);

var Company=require("./app/models/company");
router.route("/companies")
    .get(function(req,res){
        Company.find(function(err,companies){
            if(err) res.send(err)
            res.json(companies);
        })
    })

    .post(function(req,res){
        var company=new Company();
        company.company_id=req.body.company_id;
        company.name=req.body.name;

        company.save(function(err){
            if(err) res.send(err);

            res.json(company);
        })
    })

router.route("/companies/:company_id")
    .get(function(req,res){
        Company.findById(req.params.company_id, function(err,company){
            if(err) res.send(err);
            res.json(company);
        })
    })

    .put(function(req,res){
        Company.findByIdAndUpdate(req.params.company_id,
            {
                company_id:req.body.company_id,
                name:req.body.name,
            }
            , function(err,company){
                if(err) res.send(err)
                res.json(company);
        })
    })

    .delete(function(req,res){
        Company.findByIdAndRemove(req.params.company_id,function(err,company){
            if(err) res.send(err);
            res.json(company);
        })
    })

var port=process.env.port||5000;
mongoose.connect("mongodb://localhost:27017/5KPOS");
app.listen(port,function(){
    console.log("Server is running at "+ port);
})