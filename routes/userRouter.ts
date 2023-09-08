import { Router } from "express";
import { check } from "express-validator";
import { login, register } from "../controllers/usersController";
import { collectErrors } from "../middlewares/collectErrors";
import { emailExists } from "../helpers/validateDB";


const router = Router();

router.post(
    "/register",
    [
        check('username', 'El username es obligatorio').not().isEmpty(),
        check('email', 'Email invalido').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
        check("email").custom(emailExists),
        collectErrors,
    ],
    register

)

router.post(
    '/login', [
        check('email', 'Ingrese un email valido').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
        collectErrors,
    ],
    login
);




export default router;