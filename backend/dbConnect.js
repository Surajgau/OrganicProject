import mongoose from "mongoose";

export const dbConnect=async()=>{
    try {
       
        await mongoose.connect("mongodb+srv://suraj:suraj@cluster0.m1veukt.mongodb.net/suraj")
            console.log(`connected successfull`);
        
    } catch (error) {
        console.log("catch dattabase ")
       console.log(error) 
    }
}