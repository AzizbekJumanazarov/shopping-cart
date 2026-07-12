import { ShoppingCart } from "lucide-react";
import type { Product } from "../types";
import { useCartStore } from "../store/useCartStore.ts";
import { useCartItemQuantity } from "../hooks/useCart.ts";
import { QuantityControl } from "./QuantityControl.tsx";

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
    const quantity = useCartItemQuantity(product.id);
    const addToCart = useCartStore((state) => state.addToCart);
    const increaseQty = useCartStore((state) => state.increaseQty);
    const decreaseQty = useCartStore((state) => state.decreaseQty);

    return(
        <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <img
                src={product.image}
                alt={product.name}
                className="h-36 w-full object-cover"
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : 'auto'}
            />

            <div className="flex flex-1 flex-col gap-1 p-3">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm font-semibold text-gray-900">
                    ${product.price.toFixed(2)}
                </p>

                <div className="mt-auto pt-2">
                    {quantity === 0 ? (
                        <button
                            onClick={() => addToCart(product)}
                            aria-label={`Add ${product.name} to cart`}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 py-2 text-sm font-medium text-white active:bg-gray-700"
                        >
                            <ShoppingCart size={16} />
                            Add
                        </button>
                    ) : (
                        <QuantityControl
                            quantity={quantity}
                            onIncrease={() => increaseQty(product.id)}
                            onDecrease={() => decreaseQty(product.id)}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}