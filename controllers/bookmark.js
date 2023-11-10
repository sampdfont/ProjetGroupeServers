import { Bookmarks } from "../models/index.js"
import { validationResult } from "express-validator";

export const ajouterBookmark = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json ({errors: errors.array() })
    }
    const { url, name, createdAt, UtilisateurId } = req.body
    const Bookmark = { url, name, createdAt, UtilisateurId }
    try {
        await Bookmarks.create(Bookmark)
        res.status(201).json({ message: "Le bookmark a bien ete ajoute." })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const supprimerBookmark = async (req, res) => {
    const id = req.params.id
    if (!parseInt(id)) {
        return res.status(200).json({ message: "Entrez un vrai entier comme id." })
    }
    try {

        await Bookmarks.destroy({ where: { id } })
        res.status(200).json({ message: "Le bookmark a ete supprimer avec succes" })

    } catch (error) {
        res.status(400).json({ message: "Probleme lors de la suppression du bookmark" })

    }

}