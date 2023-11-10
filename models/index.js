// Importer tous les models
import Utilisateurs from "./Utilisateurs.js";
import Roles from "./Roles.js";
import ModalitePaiement from "./ModalitePaiement.js";
import Passwords from "./Passwords.js";
import Bookmarks from "./Bookmarks.js";
import History from "./History.js"


// Appliquer les relations (associations)
Utilisateurs.belongsTo(Roles)
Roles.hasMany(Utilisateurs)
Utilisateurs.hasMany(ModalitePaiement)
ModalitePaiement.belongsTo(Utilisateurs)
Utilisateurs.hasMany(Passwords)
Passwords.belongsTo(Utilisateurs)
Utilisateurs.hasMany(Bookmarks)
Bookmarks.belongsTo(Utilisateurs)
Utilisateurs.hasMany(History)
History.belongsTo(Utilisateurs)

export { Utilisateurs, Roles, ModalitePaiement, Passwords, Bookmarks, History}