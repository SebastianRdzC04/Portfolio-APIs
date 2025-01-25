import {Request, Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {createUser,
    findUserByEmail} from "../services/userServices";

dotenv.config()

const KEY_SECRET = process.env.KEY_SECRET

const loginController = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
        res.status(400).json({message: 'User not found'});
        return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(400).json({message: 'Invalid credentials'});
        return;
    }
    const token = jwt.sign({id: user.id, role: user.roleId}, KEY_SECRET as string, {expiresIn: "1h"});
    res.json({message: "Login Success", token});
}

const registerController = async (req: Request, res: Response) => {
    const {name, lastname, email, phone, address, password, roleId} = req.body;
    const user = await findUserByEmail(email);
    if (user) {
        res.status(400).json({message: 'User already exists'});
        return;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({name, lastname, email, phone, address, password: hashPassword, roleId});
    res.json({message: 'User created', newUser});
}

const changePasswordController = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
        res.status(400).json({message: 'User not found'});
        return;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await user.update({password: hashPassword});
    res.json({message: 'Password updated'});
}


export {loginController, registerController, changePasswordController};