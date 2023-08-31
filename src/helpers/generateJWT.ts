import jwt from "jsonwebtoken";

const generateJWT = (id: string = ""): Promise<string> => {
    return new Promise((res, rej) => {
        const payload = { id }; // ID del usuario

        jwt.sign(
            payload, // Contiene el ID
            process.env.SECRET_KEY as string, // La clave secreta almacenada en .env, se trata como string
            {
                expiresIn: "8h", // Tiempo de expiración del token
            },
            (err: Error | null, token: string | undefined) => {
                // Recibe error y token
                if (err) {
                    // Si hay un error
                    console.log(err);
                    rej("No se pudo generar el token"); // Rechaza con mensaje de error
                } else {
                    // Si se generó el token exitosamente
                    res(token as string); // Envía el token como string
                }
            }
        );
    });
};

export default generateJWT;

