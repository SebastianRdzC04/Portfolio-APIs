import {DataTypes, Model} from "sequelize";
import sequelize from "../db";

class Rol extends Model {
    public id!: number;
    public name!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Rol.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: "roles",
    sequelize: sequelize
})

export default Rol;