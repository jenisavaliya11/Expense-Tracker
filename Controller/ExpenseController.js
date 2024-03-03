const Schema = require("../Model/ExpenseModel");

const addExpenses = (req,res) => {
    const expense = new Schema(req.body);
    expense.save().then((data) => {
        res.status(201).json({
            message: "Data has been saved",
            success: true,
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
        console.log(err);   
    })
};

const getExpenses = (req,res) => {

    console.log(Schema);
    Schema.find().then((data)=>{
        res.status(200).json({
            message:"success",
            success:true,
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"error",
            error:err
        })
    });
    
}

//get expense by id
const getExpenseByToken = (req,res) => {   
    var token = req.body.token;
    var user = tokenutil.validateToken(token);
    console.log(user);
    Schema.findById(user.id).then((data)=>{
        res.status(200).json({
            message:"success",
            success:true,
            data:data
        })
    }).catch((err)=>{
        res.status(500).json({
            message:"error",
            error:err
        })
    });
    
}


//exports

module.exports = {
    addExpenses,
    getExpenses,
    // getExpenseById
    getExpenseByToken

}