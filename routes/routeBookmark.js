//fonction permettant de creer des routes
import { Router } from "express";
import { ajouterBookmark, supprimerBookmark } from "../controllers/bookmark.js";
import { body } from "express-validator";
import { verifierToken } from "../auth/authentification.js";

const routesBookmark = Router()

//Les routes deviennent
routesBookmark.post('/', 
    body('url').isURL(),
    body('createdAt').isAfter("2023-11-09"),
    body('UtilisateurId').notEmpty(),
    ajouterBookmark)
    .delete('/:id', verifierToken, supprimerBookmark)

export default routesBookmark