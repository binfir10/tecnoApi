import { Model, Schema, Types, model } from "mongoose";

export interface IItem {
    product: {
        id: number;
        name: string;
        marca: string;
        price: number;
        img: string;
        specs: string[];
    };
    quantity: number;
}

export interface IShippingDetails {
    address: string;
    cellphone: number;
    email: string;
    location: string;
    name: string;
    province: string;
}

export interface IOrder {
    createdAt: Date;
    userId: Types.ObjectId;
    items: IItem[];
    shippingDetail: IShippingDetails;
    total: number;
}

const OrderSchema = new Schema<IOrder>({
    createdAt: {
        type: Date,
        default: Date.now,
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    items: [
        {
            product: {
                id: {
                    type: Number,
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                marca: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                img: {
                    type: String,
                    required: true,
                },
                specs: [{
                    type: String,
                },],
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],

    shippingDetail: {
        name: {
            type: String,
            required: true,
        },
        cellphone: {
            type: Number,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        province: {
            type: String,
            required: true,
        },
    },
    total: {
        type: Number,
        required: true,
    },
});

const Order: Model<IOrder> = model<IOrder>("Order", OrderSchema);

export default Order;
