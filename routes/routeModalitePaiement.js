//fonction permettant de creer des routes
import { Router } from "express";
import { ajouterModalitePaiement, listModalitePaiement, modifierModalitePaiement } from "../controllers/modalitepaiement.js";
import { body } from "express-validator";

const routesModalitePaiement = Router()

//Les routes deviennent
routesModalitePaiement.get('/', listModalitePaiement)
    .post('/', 
    body('dateExpiration').isAfter("2023-01-01"),
    body('UtilisateurId').notEmpty(),
    ajouterModalitePaiement)
    .put('/:id',
    body('dateExpiration').isAfter("2023-01-01"),
    body('UtilisateurId').notEmpty(),
    modifierModalitePaiement)

export default routesModalitePaiement