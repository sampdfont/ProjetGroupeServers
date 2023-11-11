//fonction permettant de creer des routes
import { Router } from "express";
import { ajouterPassword, listPassword, modifierPassword } from "../controllers/password.js";
import { body } from "express-validator";
import { isAdmin, verifierToken } from "../auth/authentification.js";

const routesPassword = Router()

//Les routes deviennent
routesPassword.get('/', verifierToken, isAdmin, listPassword)
    .post('/', verifierToken,
    body('password').notEmpty(),
    body('UtilisateurId').notEmpty(),
    ajouterPassword)
    .put('/:id', verifierToken,
    body('password').notEmpty(),
    body('UtilisateurId').notEmpty(),
    modifierPassword)

export default routesPassword