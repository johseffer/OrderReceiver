import { OrderItem } from './order-item-model';
import { Customer } from './customer-model';

export class Order {
    id: string;
    number: string;
    creationDate: string;
    customer: Customer;
    customerId: string;
    orderItems: OrderItem[];

    constructor(obj: any) {
        this.creationDate = obj.creationDate;
        this.id = obj.id;
        this.number = obj.number;
        this.orderItems = obj.orderItems;
        this.customer = obj.customer;
        this.customerId = obj.customerId;
    }
}
