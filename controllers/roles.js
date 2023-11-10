import { Roles } from "../models/index.js"
import { validationResult } from "express-validator";

export const listRoles = async (req, res) => {
    try {
        // Retourner la liste complete des roles
        const resultat = await Roles.findAll()
        res.status(200).json({ data: resultat })

    } catch (error) {

        res.json({ error: error.message })
    }
}

export const ajouterRoles = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json ({errors: errors.array() })
    }
    const { securityLevel, name } = req.body
    const role = { securityLevel, name }
    try {
        await Roles.create(role)
        res.status(201).json({ message: "Le role a ete ajouter avec succes." })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}