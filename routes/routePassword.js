//fonction permettant de creer des routes
import { Router } from "express";
import { ajouterPassword, listPassword, modifierPassword } from "../controllers/password.js";
import { body } from "express-validator";

const routesPassword = Router()

//Les routes deviennent
routesPassword.get('/', listPassword)
    .post('/', 
    body('password').notEmpty(),
    body('UtilisateurId').notEmpty(),
    ajouterPassword)
    .put('/:id', 
    body('password').notEmpty(),
    body('UtilisateurId').notEmpty(),
    modifierPassword)

export default routesPassword