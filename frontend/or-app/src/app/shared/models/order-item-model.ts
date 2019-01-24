import { Product } from './product-model';

export class OrderItem {
    id: string;
    orderId: string;
    productId: string;
    product: Product;
    unitPrice: number;
    quantity: number;
    rentability: number;

    constructor(obj: any) {
        this.orderId = obj.orderId;
        this.id = obj.id;
    }
}
