import mongoose from "mongoose";

const userInfo=new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    token:{type:String,default:""},
    logInTime:{type:Number,default:0},
    contact:{type:Number,default:""},
    gender:{type:Number,enum:[0,1,2],default:0},      //0 for male, 1 for female, [2]other
    dob:{type:String,default:""}
   
    


},{timestamps:true})
export const userData=mongoose.model("userInfo",userInfo);
