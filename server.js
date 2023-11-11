//Importer le module dans notre projet (server.js)
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

import dotenv from 'dotenv'
import database from "./connexion.js"

import routesUtilisateur from './routes/routeUtilisateur.js'
import routesRoles from './routes/routeRoles.js'
import routesPassword from './routes/routePassword.js'
import routesModalitePaiement from './routes/routeModalitePaiement.js'
import routesHistory from './routes/routeHistory.js'
import routesBookmark from './routes/routeBookmark.js'
import Logging from './routes/routeAuth.js'

database.sync()

const { PORT } = dotenv.config().parsed
const app = express()
//Route des modules
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//Routes pour le projet
app.use('/utilisateurs', routesUtilisateur)
app.use('/roles', routesRoles)
app.use('/password', routesPassword)
app.use('/modalite',routesModalitePaiement)
app.use('/histoire', routesHistory)
app.use('/bookmark', routesBookmark)

//Login
app.use('/login', Logging)

//Indiquer le port d’écoute du serveur
app.listen(PORT, () => console.log('Server running on port 5000'))