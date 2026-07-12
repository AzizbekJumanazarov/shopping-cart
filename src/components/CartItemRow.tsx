import { Trash2 } from "lucide-react";
import type { CartItem } from "../types";
import { useCartStore } from "../store/useCartStore.ts";
import { QuantityControl } from "./QuantityControl.tsx";

interface CartItemRowProps {
    item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
    const increaseQty = useCartStore((state) => state.increaseQty);
    const decreaseQty = useCartStore((state) => state.decreaseQty);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const { product, quantity } = item;
    const subtotal = product.price * quantity;

    return (
        <div className="flex gap-3 border-b border-gray-100 py-3">
            <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded-lg object-cover"
            />

            <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">
                            {product.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                            ${product.price.toFixed(2)} each
                        </p>
                    </div>

                    <button
                        onClick={() => removeFromCart(product.id)}
                        aria-label={`Remove ${product.name} from cart`}
                        className="text-gray-400 active:text-red-500"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <QuantityControl
                        quantity={quantity}
                        onIncrease={() => increaseQty(product.id)}
                        onDecrease={() => decreaseQty(product.id)}
                    />
                    <span className="text-sm font-semibold text-gray-900">
            ${subtotal.toFixed(2)}
          </span>
                </div>
            </div>
        </div>
    )

}