import user from "../model/userModel.js";

export const create=async(req,res)=>{
try{
        const newUser=new user(req.body);
        const {email}=newUser;
        const userExit=await user.findOne({email})
        if (userExit){
            return res.status(400).json({message:"user already exist"});
        }
        const saveData=await newUser.save();
        // res.status(200).json(saveData);/
        res.status(200).json({message:"user created successfully"});
    } 
catch(error){
    res.status(500).json({errorMessage:error.message})
}
};
export const getAllUsers=async(req,res)=>{
    try{
        const userData=await user.find();
        if(!userData || userData.lenth===0){
            return res.status(404).json({message:"user data not found"});
        }
        res.status(200).json(userData);
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
};
export const getUserById=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findById(id);
        if(!userExist){
            return res.status(404).json({message:"user  not found"});
        }
        res.status(200).json(userExist)
    }catch (error){
                res.status(500).json({errorMessage:error.message});

    }
};

export const update=async (req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findById(id);
        if(!userExist){
        return res.status(404).json({message:"user  not found"});
        }
        const updatedData=await user.findByIdAndUpdate(id, req.body,{
            new:true,
        })
        // res.status(200).json(updatedData)
                res.status(200).json({message:"user updated successfully"});

    }catch(error){
    res.status(500).json({errorMessage:error.message});

    }
}
export const deleteUser=async (req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findById(id);
        if(!userExist){
        return res.status(404).json({message:"User  not found"});
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"user deleted suceesfully"})
    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
};