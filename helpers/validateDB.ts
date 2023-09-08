import User, { IUser } from "../model/usersModel";

export const emailExists = async (email: string): Promise<void> => {

    const userExists: IUser | null = await User.findOne({ email });

    if (userExists) {
        throw new Error(`Email ya registrado`);
    }
};