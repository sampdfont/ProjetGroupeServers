import { Passwords } from "../models/index.js"
import { validationResult } from "express-validator";

export const listPassword = async (req, res) => {
    try {
        // Retourner la liste complete des passwords sauvegarder
        const resultat = await Passwords.findAll()
        res.status(200).json({ data: resultat })

    } catch (error) {

        res.json({ error: error.message })
    }
}

export const ajouterPassword = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json ({errors: errors.array() })
    }
    const { password, UtilisateurId } = req.body
    const passwordDeUtilisateur = { password, UtilisateurId }
    try {
        await Passwords.create(passwordDeUtilisateur)
        res.status(201).json({ message: "Le password a ete ajouter avec succes." })
    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la creation du password." })
    }
}

export const modifierPassword = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json ({errors: errors.array() })
    }
    const { id } = req.params
    const nouveauPassword = req.body
    try {
        await Passwords.update(nouveauPassword, { where: { id } })
        res.status(200).json({ message: "Le password a ete mis a jour avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la modification du password" })
    }

}