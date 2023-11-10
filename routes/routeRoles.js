//fonction permettant de creer des routes
import { Router } from "express";
import { ajouterRoles, listRoles } from "../controllers/roles.js";
import { body } from "express-validator";
import { verifierToken } from "../auth/authentification.js";

const routesRoles = Router()

//Les routes deviennent
routesRoles.get('/', verifierToken ,listRoles)
    .post('/', 
    body('securityLevel').notEmpty(),
    ajouterRoles)

export default routesRoles