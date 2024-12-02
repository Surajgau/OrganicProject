import jwt from 'jsonwebtoken'
export const tokenGenerate=async(id)=>{
    try {
        console.log(id,"idi")
        const seckey='12321';
        const token=await jwt.sign({_id:id},seckey);
        const decode=await jwt.verify(token,seckey);
        console.log(decode);
        return ({token,decode});
    } catch (error) {
        console.log(error)
    }
}