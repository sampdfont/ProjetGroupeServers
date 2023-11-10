import { DataTypes } from "sequelize";
import database from "../connexion.js"

const Roles = database.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    securityLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

export default Roles