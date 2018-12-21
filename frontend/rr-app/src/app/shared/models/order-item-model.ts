import { Product } from './product-model';

export class OrderItem {
    id: string;
    product: Product;
    unitPrice: number;
    quantity: number;
}
