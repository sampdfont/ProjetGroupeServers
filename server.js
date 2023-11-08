//Importer le module dans notre projet (server.js)
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

import dotenv from 'dotenv'
import database from "./connexion.js"

const { PORT } = dotenv.config().parsed
const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//Indiquer le port d’écoute du serveur
app.listen(PORT, () => console.log('Server running on port 5000'))