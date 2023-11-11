import { validationResult } from "express-validator";
import { Utilisateurs } from "../models/index.js";
//importer le module de hashage
import bcrypt from "bcryptjs";

export const listUtilisateur = async (req, res) => {
    try {
        //Retourner la liste complete des utilisateurs
        const resultat = await Utilisateurs.findAll()
        res.status(200).json({ data: resultat })
    } catch (error) {
        res.json({ error: error.message })
    }
}

export const ajouterUtilisateur = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json ({errors: errors.array() })
    }

    const { nom, prenom, naissance, photo, telephone, email, motDePasse, RoleId } = req.body
    
    const mdpCrypte = bcrypt.hashSync(motDePasse,10)

    const utilisateur = { nom, prenom, naissance, photo, telephone, email, motDePasse:mdpCrypte, RoleId }
    try {
        await Utilisateurs.create(utilisateur)
        res.status(201).json({ message: "L'utilisateur a ete ajouter avec succes." })
    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la creation de l'utilisateur." })
    }
}

export const modifierUtilisateur = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json ({errors: errors.array() })
    }
    const { id } = req.params
    const nouvelUtilisateur = req.body
    try {
        await Utilisateurs.update(nouvelUtilisateur, { where: { id } })
        res.status(200).json({ message: "L'utilisateur a ete mis a jour avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la modification de l'utilisateur." })
    }

}

export const supprimerUtilisateur = async (req, res) => {
    const id = req.params.id
    if (!parseInt(id)) {
        return res.status(200).json({ message: "Entrez un vrai entier comme id." })
    }
    try {

        await Utilisateurs.destroy({ where: { id } })
        res.status(200).json({ message: "L'utilisateur a ete supprimer avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la suppression de l'utilisateur" })

    }

}
