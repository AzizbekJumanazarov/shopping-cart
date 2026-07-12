import { useCartStore } from "../store/useCartStore.ts";

export function CartPage() {
    const items = useCartStore((state) => state.items);

    return (
        <div className="p-4">
            <h1 className="mb-4 text-xl font-bold text-gray-900">Cart</h1>
            {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <pre>{JSON.stringify(items, null, 2)}</pre>
            )}
        </div>
    );
}