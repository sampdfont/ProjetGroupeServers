import { Router } from "express";
import { ajouterModalitePaiement, listModalitePaiement, modifierModalitePaiement } from "../controllers/modalitepaiement.js";
import { body } from "express-validator";
import { verifierToken } from "../auth/authentification.js";

const routesModalitePaiement = Router()

//Les routes deviennent
routesModalitePaiement.get('/', verifierToken, listModalitePaiement)
    .post('/', verifierToken,
    //Je voudrait faire une verification avec isCreditCard mais ca ne fonctionne pas
    body('dateExpiration').isAfter("2023-01-01"),
    body('UtilisateurId').notEmpty(),
    ajouterModalitePaiement)
    .put('/:id', verifierToken,
    body('dateExpiration').isAfter("2023-01-01"),
    body('UtilisateurId').notEmpty(),
    modifierModalitePaiement)

export default routesModalitePaiement