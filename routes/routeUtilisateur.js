//fonction permettant de creer des routes
import { Router } from "express";
import { body } from "express-validator"
import { listUtilisateur, ajouterUtilisateur, modifierUtilisateur, supprimerUtilisateur} from "../controllers/utilisateur.js";

const routesUtilisateur = Router()

//Les routes deviennent
routesUtilisateur.get('/', listUtilisateur)
    //.get('/:id', etudiantParId)
    .post('/',
    body('naissance').isBefore("2023-11-09"),
    body('photo').isURL(),
    body('telephone').isMobilePhone(),
    body('email').isEmail(),
    body('RoleId').notEmpty(),
    ajouterUtilisateur)
    .put('/:id',
    body('naissance').isBefore("2023-11-09"),
    body('photo').isURL(),
    body('telephone').isMobilePhone(),
    body('email').isEmail(),
    body('RoleId').notEmpty(),
    modifierUtilisateur)
    .delete('/:id', supprimerUtilisateur)

export default routesUtilisateur