import { validationResult } from "express-validator";
import { ModalitePaiement } from "../models/index.js"

export const listModalitePaiement = async (req, res) => {
    try {
        // Retourner la liste complete des modalites de paiement sauvegarder
        const resultat = await ModalitePaiement.findAll()
        res.status(200).json({ data: resultat })

    } catch (error) {

        res.json({ error: error.message })
    }
}

export const ajouterModalitePaiement = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json ({errors: errors.array() })
    }
    const { numeroCarte, nomSurCarte, dateExpiration, UtilisateurId } = req.body
    const ModeliteDeUtilisateur = { numeroCarte, nomSurCarte, dateExpiration, UtilisateurId }
    try {
        await ModalitePaiement.create(ModeliteDeUtilisateur)
        res.status(201).json({ message: "Le modalite de paiement a ete ajouter avec succes." })
    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la creation du modalite de paiement." })
    }
}

export const modifierModalitePaiement = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json ({errors: errors.array() })
    }
    const { id } = req.params
    const nouveauModalite = req.body
    try {
        await ModalitePaiement.update(nouveauModalite, { where: { id } })
        res.status(200).json({ message: "Le modalite de paiement a ete mis a jour avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la modification du modalite de paiement" })
    }

}