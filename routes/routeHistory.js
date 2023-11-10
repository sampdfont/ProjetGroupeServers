//fonction permettant de creer des routes
import { Router } from "express";
import { ajouterHistory, supprimerHistory, updateHistory } from "../controllers/history.js";
import { body } from "express-validator";
import { verifierToken } from "../auth/authentification.js";

const routesHistory = Router()

//Les routes deviennent
routesHistory.post('/', 
    body('url').isURL(),
    body('UtilisateurId').notEmpty(),
    ajouterHistory)
    .put('/:id', 
    body('url').isURL(),
    body('UtilisateurId').notEmpty(),
    updateHistory)
    .delete('/:id', verifierToken,supprimerHistory)

export default routesHistory