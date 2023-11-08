// Amener les types de donnees
import { DataTypes } from 'sequelize'

//Amener la connexion a la base de donnees
import database from "../connexion.js"

const Utilisateur = database.define('Utilisateur', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    naissance: {
        type: DataTypes.DATEONLY
    },
    photo: {
        type: DataTypes.STRING
    },
    telephone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    motDePasse: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Utilisateur