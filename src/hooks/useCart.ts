import { useCartStore } from "../store/useCartStore.ts";

export const useCartTotals = ()  => {
    const items = useCartStore((state) => state.items);
    const totalCount = items.reduce(
        (sum, i) => sum + i.quantity, 0);
    const totalAmount = items.reduce(
        (sum,i) => sum+i.product.price * i.quantity, 0);
    return { totalCount, totalAmount };
};

export const useCartItemQuantity = (productId: string) =>
    useCartStore(
        (state) => state.items.find(
            (i) => i.product.id === productId
        )?.quantity ?? 0
    );