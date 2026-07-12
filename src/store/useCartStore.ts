import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartStore, CartItem, Product } from "../types";

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            addToCart: (product: Product) =>
                set((state) => {
                    const existing = state.items.find(
                        (i) => i.product.id === product.id
                    );

                    if(existing) {
                        return {
                            items: state.items.map((i) =>
                                i.product.id === product.id
                                ? { ...i, quantity: i.quantity + 1 } : i
                            )}
                    }

                    return {
                        items: [...state.items, {product, quantity: 1}],
                    };
                }),
            increaseQty: (productId: string) =>
                set((state) => ({
                    items: updateItem(state.items, productId, (item) => ({
                        ...item,
                        quantity: item.quantity + 1,
                    })),
                })),

            decreaseQty: (productId: string) =>
                set((state) => {
                    const item = state.items.find((i)=> i.product.id === productId);
                    if(!item) return state;

                    if(item.quantity <= 1){
                        return {
                            items: state.items.filter((i)=> i.product.id != productId),
                        }
                    }

                    return {
                        items: updateItem(state.items, productId, (i) => ({
                            ...i,
                            quantity: i.quantity - 1,
                        }))
                    }
                }),
            removeFromCart: (productId:string) =>
                set((state)=>({
                   items: state.items.filter((i)=>i.product.id != productId),
                })),

            clearCart: () => set({ items:[] }),
        }),
        { name: 'cart-storage'}
    )
);

function updateItem(
    items: CartItem[],
    productId: string,
    updater: (item: CartItem) => CartItem
): CartItem[] {
    return items.map((i) => (i.product.id === productId ? updater(i): i));
}