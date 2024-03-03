const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // id: {type : String , required : true},
    fname:{ type:String },
    lname:{ type:String } ,
    email: {type:String ,required:true , unique:true} , 
    password: {type:String , required:true} ,
    mobile_no: {type:Number , unique:true, required:true} ,    
    status: {type: String }
})

module.exports = mongoose.model('ExpenseUser',UserSchema);