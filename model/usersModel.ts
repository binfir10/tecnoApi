import { Model, Schema, model } from "mongoose"

export interface IUser {
    username: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: [true, "El nombre de usuario es obligario"]
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"]
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
})

UserSchema.methods.toJSON = function () {
    const { __v, _id, password, ...user } = this.toObject()
    return user
}

const User: Model<IUser> = model<IUser>("User", UserSchema)

export default User