import { userData } from "./schema.js"
import bcrypt from 'bcrypt'
import { tokenGenerate } from "./tokenGenerate.js";
export const signup = async (req, res) => {
    try {
        console.log(req.body,"klkl")
        const data = await userData.findOne({ email: req.body.email });

        if (data !== null) {
            return res.json({
                success: false,
                status: 404,
                message: `Email already exit`,
                body: {}
            });
        }
        else {

            const bpass = await bcrypt.hash(req.body.password, 10);
            const pass = await userData.create({ ...req.body, password: bpass })
            const token = await tokenGenerate(pass._id);
            pass.token = token.token;
            pass.logInTime = token.decode.iat;
            pass.save();
            return res.json({
                success: true,
                status: 200,
                message: `Email sucessful add`,
                body: pass
            });
        }



    } catch (error) {
        console.log(error)
    }

}

export const login = async (req, res) => {
    try {
        console.log(req.body,"hjhjhj")
        const data = await userData.findOne({ email: req.body.email });
        console.log(data,"data")
        // return res.json(data);
        if (data === null) {
            return res.json({
                success: false,
                status: 404,
                message: 'Email not find',
                body: {}
            });
        }
        else {
            const cpass = await bcrypt.compare(req.body.password, data.password);
            console.log(cpass, "compare pass")
            if (cpass == false) {
                return res.json({
                    success: false,
                    status: 404,
                    message: 'incorrect password',
                    body: {}
                });
            }
            else {
                const token =await tokenGenerate(data._id)
                console.log(token,"login token")
                data.token=token.token;
                data.logInTime=token.decode.iat;
                data.save();
                return res.json({
                    success:true,
                    status:200,
                    message:'logIn successfull',
                    body:data
                });
            }
        }
    } catch (error) {
        console.log(error)
    }

}
export const fid = async (req, res) => {
    try {
        const data = await userData.find();
        return res.json(data);
    } catch (error) {
        console.log(error)
    }

}

export const fBP=async (req,res) => {
    try {

        const data=await userData.findById({_id:req.params.email});
        return res.json(data);
        
    } catch (error) {
        console.log(error)
    }
    
}

export const deleteUser=async (req,res) => {
    try {
    console.log("delte api")
        const data=await userData.findByIdAndDelete({_id:req.params.datahhhhh});
        console.log(data);
    } catch (error) {
        console.log(error)
    }
    
}