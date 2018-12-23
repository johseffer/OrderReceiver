import { OrderItem } from './order-item-model';

export class Order {
    id: string;
    number: string;
    orderItems: OrderItem[];

    constructor(obj: any) {
        this.id = obj.id;
        this.number = obj.number;
        this.orderItems = obj.orderItems;
    }
}
