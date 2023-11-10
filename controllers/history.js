import { History } from "../models/index.js"
import { validationResult } from "express-validator";

export const ajouterHistory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { url, nmbVisite, name, UtilisateurId } = req.body
    const ModeliteDeHistory = { url, nmbVisite, name, UtilisateurId }
    try {
        await History.create(ModeliteDeHistory)
        res.status(201).json({ message: "L'historique a bien ete ajoute." })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const updateHistory = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { id } = req.params
    const nouveauHistory = req.body

    try {
        await History.update(nouveauHistory, { where: { id } })
        res.status(200).json({message: "L'historique a ete mise a jour avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la mise a jour de l'historique" })

    }
}

export const supprimerHistory = async (req, res) => {
    const id = req.params.id
    if (!parseInt(id)) {
        return res.status(200).json({ message: "Entrez un vrai entier comme id." })
    }
    try {

        await History.destroy({ where: { id } })
        res.status(200).json({ message: "L'historique a ete supprimer avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la suppression de l'historique" })

    }

}