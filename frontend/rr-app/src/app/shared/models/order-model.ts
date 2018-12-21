import { OrderItem } from './order-item-model';

export class Order {
    id: string;
    number: string;
    name: string;
    orderItems: OrderItem[];

    constructor(obj: any) {
        this.id = obj.id;
        this.name = obj.name;
        this.number = obj.number;
    }
}
