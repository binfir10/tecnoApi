import { Request, Response } from "express";
import bcryptjs from "bcryptjs"
import Randomstring from "randomstring";
import User, { IUser } from "../model/usersModel";
import generateJWT from "../helpers/generateJWT";


export const register = async (req: Request, res: Response): Promise<void> => {

    //trae los datos que se pasaron desde el front
    const { username, email, password }: IUser = req.body
    
    //Crea un nuevo usuario con los datos pasados
    const user = new User({ username, email, password })


    const salto = bcryptjs.genSaltSync()

    user.password = bcryptjs.hashSync(password, salto)

    await user.save()

    res.status(201).json({
        user
    })

}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password }: IUser = req.body
    
    try {
        const user = await User.findOne({ email })
        
        if (!user) {
            res.status(400).json({
                message: 'Usuario no encontrado'
            });
            return;
        }
        
        const isPasswordValid = bcryptjs.compareSync(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({
                message: 'Contraseña incorrecta',
            })
            return;
        }

        const token = await generateJWT(user.id)
        console.log('token:', token)
        
        res.json({
            user, token
        })

    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}