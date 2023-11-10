import { DataTypes } from "sequelize";
import database from "../connexion.js"
import Utilisateur from "./Utilisateurs.js";

const Bookmarks = database.define('Bookmarks', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATEONLY,
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

export default Bookmarks