import {Request, Response} from "express";
import {updateUser, viewUser, viewAllUsers} from "../services/userServices";

const viewAllUsersController = async (req: Request, res: Response) => {
    const users = await viewAllUsers();
    res.json(users);
}

const viewUserController = async (req: Request, res: Response) => {
    const userAuth = req.user;
    const userId = userAuth?.id
    const foundUser = await viewUser(userId as string);
    if (!foundUser) {
        res.status(404).json({message: 'User not found'});
        return;
    }
    res.json({message: "user founded",user: foundUser});
}

const updateUserController = async (req: Request, res: Response) => {
    const userAuth = req.user;
    const userId = userAuth?.id as string;
    const {name, lastname, email, phone, address} = req.body;
    const userAffected = await updateUser(userId, {
        name: name? name : undefined,
        lastname: lastname? lastname : undefined,
        email: email? email : undefined,
        phone: phone? phone : undefined,
        address: address? address : undefined,
    })
    const userUpdated = await viewUser(userId);
    res.json({message: 'User updated', userUpdated});
}

export {viewAllUsersController, viewUserController, updateUserController};