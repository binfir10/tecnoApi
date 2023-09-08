import { Router } from "express";
import { validateJWT } from "../middlewares/validateJWT";
import { collectErrors } from "../middlewares/collectErrors";
import { createOrder, getOrders } from "../controllers/ordersController";

import { check } from "express-validator";


const router = Router();

router.get('/', [
        validateJWT,
        collectErrors
    ],
    getOrders);

router.post('/',
    [
        validateJWT,
        check('items', 'Los productos son obligatorios').not().isEmpty(),
        check('shippingDetail', 'Los detalles de la compra son obligatorios').not().isEmpty(),
        check('total', 'El total de la compra es obligatorio').not().isEmpty(),
        collectErrors,
    ],
    createOrder
);

export default router;