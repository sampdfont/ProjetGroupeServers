import { DataTypes } from "sequelize";
import database from "../connexion.js"
import Utilisateur from "./Utilisateurs.js";

const Modalite = database.define('Modalite', {
    numeroCarte: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    nomSurCarte: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateExpiration: {
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


export default Modalite