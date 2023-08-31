import express, {Express} from "express"
import cors from "cors"
import { connectionDB } from "../config";
import userRoute from "../routes/userRouter"
import orderRoute from "../routes/orderRouter"



export class Server {
    app: Express;
    port: string | number | undefined;
    authPath: string;
    ordersPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = "/auth"
        this.ordersPath = "/orders"

        this.conectDB()
        this.middlewares()
        this.routes()
    }

    async conectDB(): Promise<void> {
        await connectionDB()
    }

    middlewares(): void {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use(this.authPath, userRoute)
        this.app.use(this.ordersPath, orderRoute)
    }

    listen(): void {
        this.app.listen(this.port, ()=>{
        console.log(`Corriendo puerto: ${this.port}`)
        })
    }
}