export interface Cart {
    items: Item[];
    totalPrice: number;
}

export interface Item {
    name: string;
    qty: number;
    price: number;
}