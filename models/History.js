import { DataTypes } from "sequelize";
import database from "../connexion.js"
import Utilisateur from "./Utilisateurs.js";

const History = database.define('History', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nmbVisite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
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
})

export default History