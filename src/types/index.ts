export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
    category?: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

export interface CartActions {
    addToCard: (product: Product) => void;
    increaseQty: (productId: string) => void;
    decreaseQty: (productId: string) => void;
    removeFromCart: (productId: string) => void;
    clearCart: ()=> void;
}

export type CartStore = CartState & CartActions;
