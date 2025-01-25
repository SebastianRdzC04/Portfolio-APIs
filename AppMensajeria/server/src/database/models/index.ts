import User from "./user";
import Rol from "./rol";

User.hasOne(Rol, {foreignKey: 'roleId'});
Rol.hasMany(User, {foreignKey: 'roleId'});

export {User, Rol};