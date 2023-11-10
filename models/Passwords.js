import { DataTypes } from "sequelize";
import database from "../connexion.js"
import Utilisateur from "./Utilisateurs.js";

const Passwords = database.define('Passwords', {
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UtilisateurId: {
        type: DataTypes.INTEGER,
        references: {
            model: Utilisateur,
            key: 'id'
        }
    }
},
{timestamps:false}
)


export default Passwords