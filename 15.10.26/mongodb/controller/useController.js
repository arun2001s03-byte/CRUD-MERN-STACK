import user from "../model/userModel";

export const create=async(requestAnimationFrame,res)=>{
try{
        const newUser=newUser=new user(req,body);
        const {email}=newUser;
        const userExit=await user.findOne({email})
        if (userExit){
            return res.status(400).json({message:"user already exist"});
        }
            const saveData=await newUse.save();
    res.status(200).json(saveData);
    } 
catch(error){
    res.status(500).json({errorMessage:error.message})
}
}