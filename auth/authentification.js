import pkg from 'jsonwebtoken';
import {Roles, Utilisateurs } from '../models/index.js';

export const verifierToken = (req, res, next) => {
    //recuperation du token
    const bearerToken = req.headers.authorization
    //Verification de la presence du token
    if (!bearerToken) return res.status(401).json({ message: "Mais vous etes pas connecter!" })

    //Recuperer le token sans la partie Bearer
    const token = bearerToken.split(' ')[1]

    pkg.verify(token, process.env.CODE_SECRET, (err, code) => {
        if (err) return res.status(401).json({ message: err.message })

        req.userId = code.id

        next()
    })
}

export const isAdmin = async (req, res, next) => {
    //Extraire le userId de la requete precedente
    const userId = req.userId

    //retourner ce message si pas de userId
    if (!userId) return res.status(403).json({ message: "Pas d'utilisateur" })
    try {
        const user = await Utilisateurs.findByPk(userId)
        const admin = await Roles.findOne({where: {name: 'admin'.toLowerCase()}})
        //Si pas de user, retourner ce message
        if (!user) return res.status(404).json({ message: 'utilisateur non existant' })

        const role = user.getDataValue('RoleId')
        const roleAdmin = admin.getDataValue('id')

        try {
            //Verifier que l'utilisateur est admin
            if (role == roleAdmin) {
                next()
                return
            }
            //Si l'utilisateur n'est pas admin, envoyer ce message
            return res.status(403).json({ message: 'Doit avoir les droits admin' })
        } catch (error) {
            return res.status(403).json({ message: error.message })
        }

    } catch (error) {
        return res.status(403).json({ message: error.message })
    }
}