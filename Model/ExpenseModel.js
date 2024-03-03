const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({

    // id: {type : String, required : true},
    name:{ type:String },
    status: {type: String , default :"Active"},
    amount: {type: Number} ,
    // catagory: {type: Schema.Types.ObjectId, ref: 'CatagoryModel'},
    catagory: {type: Schema.Types.ObjectId, ref: 'ExpenseModel'},
    User_id: {type: Schema.Types.ObjectId, ref: 'UserModel1'},
});

module.exports= mongoose.model("ExpenseModel" , ExpenseSchema);