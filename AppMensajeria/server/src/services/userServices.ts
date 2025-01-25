import User from "../database/models/user";
import Rol from "../database/models/rol";

export interface UserInterface {
    name?: string,
    lastname?: string,
    email?: string,
    phone?: string,
    address?: string,
    password?: string,
    roleId?: number
}

const viewAllUsers = async () => {
    return await User.findAll();
}

const viewUser = async (id: string) => {
    return await User.findByPk(id);
}

const createUser = async (user: UserInterface) => {
    const {name, lastname, email, phone, address, password, roleId} = user;
    const dataToCreate = {name, lastname, email, phone, address, password, roleId};
    return await User.create(dataToCreate);
}

const updateUser = async (id: string, user: UserInterface) => {
    const {name, lastname, email, phone, address, password, roleId} = user;
    const dataToUpdate = {...(name && {name}),
        ...(lastname && {lastname}),
        ...(email && {email}),
        ...(phone && {phone}),
        ...(address && {address}),
        ...(password && {password}),
        ...(roleId && {roleId})};
    return await User.update(dataToUpdate, {where: {id}});
}

const findUserByEmail = async (email: string) => {
    return await User.findOne({where: {email}});
}

export {viewAllUsers, viewUser, createUser, updateUser, findUserByEmail};

