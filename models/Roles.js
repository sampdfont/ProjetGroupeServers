import { DataTypes } from "sequelize";
import database from "../connexion.js"

const Roles = database.define('Roles', {
    securityLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})


export default Roles