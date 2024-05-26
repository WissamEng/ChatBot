import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction)=>{
    //get all users from DB
    try {
        const users = await User.find();
        return 
        
    } catch (error) {
        
    }

    

};