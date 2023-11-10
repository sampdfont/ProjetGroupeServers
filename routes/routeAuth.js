import { Router } from "express";
import { login } from "../auth/logincontroller.js";

const Logging = Router()

Logging.post('/', login)

export default Logging