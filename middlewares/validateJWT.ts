import { NextFunction, Request, Response } from "express";
import User, { IUser } from "../model/usersModel";
import jwt, { JwtPayload } from "jsonwebtoken";

export const validateJWT = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const tokenHeaderName = req.headers["x-token"] as string;
    if (!tokenHeaderName) {
        res.status(401).json({
            message: 'No Token Provided',
        })
        return;
    }
    try {
        const secretKey = process.env.SECRET_KEY as string
        const payload = jwt.verify(tokenHeaderName, secretKey) as JwtPayload;

        const { id } = payload

        const userConfirm: IUser | null = await User.findById(id)
        
        if (!userConfirm) {
            res.status(401).json({
                message:'Invalid Token'
            })
            return
        }

        req.body.userConfirm = userConfirm

        next()

    } catch (error) {
        res.status(401).json({
            message: 'Invalid Token',
        }) 
    }
}
