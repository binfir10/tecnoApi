import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import Order, { IOrder } from "../model/ordersModel";


export const getOrders = async (req: Request, res: Response): Promise<void> => {
    const userID: ObjectId = req.body.userConfirm._id;

    const query = { user: userID }
    const orders = await Order.find(query)

    res.json({
        data: [...orders]
    })
}


export const createOrder = async (req: Request, res: Response): Promise<void> => {
    const userID: ObjectId = req.body.userConfirm._id;
    const orderData: IOrder = req.body;

    const data = {
        ...orderData,
        user: userID,
        createdAt: new Date(),
        status: 'pending',
    }
    const order = new Order(data);

    await order.save();

    res.status(201).json({
        order
    })
    
}