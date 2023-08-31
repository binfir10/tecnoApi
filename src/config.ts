import mongoose from "mongoose"

export const connectionDB = async (): Promise<void> => {
    try {
        const URL_DB = process.env.DB_URL;
        if (!URL_DB) {
            throw new Error("No se pudo conectar a la base de datos")
        }
        await mongoose.connect(URL_DB)
        console.log('Conectado a Base de Datos')
        
    } catch (error) {
        console.log(`Error al conectarse ${error}`)
        throw new Error("Error al iniciar Base de Datos")
    }
}