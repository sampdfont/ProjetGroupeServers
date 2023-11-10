//importer le modele de l'utilisateur/etudiant
import { Utilisateurs } from "../models/index.js";
//importer le module qui cree le jeton (token)
//import { jwt } from "jsonwebtoken";
import pkg from 'jsonwebtoken';
const {jwt} = pkg;
//importer le module de hashage
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
    //Recuperation du login et mot de passe de l'utilisateur

    const { email, motDePasse } = req.body

    if (!email) return res.status(404).json({ message: "L'email est obligatoire!" })
    try {
        //Allons chercher l'utilisateur dans la base de donnee
        const user = await Utilisateurs.findOne({ where: { email } }) //On cherche un email dans la base de donnee qui est pareille que dans la requete
        if (!user) return res.status(401).json({ message: "Cet adresse courriel n'est pas enregistrer" })

        //Verification du mot de passe
        const mdpVerifie = bcrypt.compareSync(motDePasse, user.motDePasse) //Retourne false meme si correcte?

        if (!mdpVerifie) return res.status(400).json({ message: "Mot de passe incorrecte" })

        //Tout est correcte, nous allons donner une clef (token) a l'utilisateur
        
        const payload = { id: user.id }
        
        const token = pkg.sign(payload, process.env.CODE_SECRET)
        
        res.status(200).json({ data: user, token })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
    