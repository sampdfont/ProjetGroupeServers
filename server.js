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

database.sync()

const { PORT } = dotenv.config().parsed
const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/utilisateurs', routesUtilisateur)
app.use('/roles', routesRoles)
app.use('/password', routesPassword)
app.use('/modalite',routesModalitePaiement)
app.use('/histoire', routesHistory)
app.use('/bookmark', routesBookmark)

//Login
app.use('/login', routerAuth)

//Indiquer le port d’écoute du serveur
app.listen(PORT, () => console.log('Server running on port 5000'))