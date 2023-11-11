//fonction permettant de creer des routes. On les importes dans le server.js pour ne pas avoir de la repetition la.
import { Router } from "express";
import { body } from "express-validator"
import { listUtilisateur, ajouterUtilisateur, modifierUtilisateur, supprimerUtilisateur} from "../controllers/utilisateur.js";
import { isAdmin, verifierToken } from "../auth/authentification.js";

const routesUtilisateur = Router()

//Les routes deviennent
routesUtilisateur.get('/', listUtilisateur)
    .post('/',
    body('naissance').isBefore("2023-11-09"),
    body('photo').isURL(),
    body('telephone').isMobilePhone(),
    body('email').isEmail(),
    body('RoleId').notEmpty(),
    ajouterUtilisateur)
    .put('/:id', verifierToken,
    body('naissance').isBefore("2023-11-09"),
    body('photo').isURL(),
    body('telephone').isMobilePhone(),
    body('email').isEmail(),
    body('RoleId').notEmpty(),
    modifierUtilisateur)
    .delete('/:id', verifierToken, isAdmin, supprimerUtilisateur)

export default routesUtilisateur