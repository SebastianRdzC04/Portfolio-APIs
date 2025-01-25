import {DataTypes, Model} from "sequelize";
import sequelize from "../db";
import Rol from "./rol";

class User extends Model {
    public id!: number;
    public name!: string;
    public lastname!: string;
    public email!: string;
    public phone!: string;
    public roleId!: typeof Rol;
    public address!: string;
    public password!: string;
    public isOn!: boolean;

}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    lastname: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    phone: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    roleId: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    isOn: {
        type: new DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: "users",
    sequelize: sequelize
})

export default User;