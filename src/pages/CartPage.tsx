import { useNavigate} from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "../store/useCartStore.ts";
import { useCartTotals } from "../hooks/useCart.ts";
import { CartItemRow } from "../components/CartItemRow";

export function CartPage() {
    const items = useCartStore((state) => state.items);
    const { totalCount, totalAmount } = useCartTotals();
    const navigate = useNavigate();
    if(items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center gap-3 px-4 py-20 text-center">
                <ShoppingBag size={48} className="text-gray-300" />
                <p className="text-gray-500">Your cart is empty</p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-2 rounded-lg bg-gray-900 px-6 py-2 text-sm font-medium text-white"
                >
                    Browse Products
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col p-4">
            <h1 className="mb-4 text-xl font-bold text-gray-900">
                Cart ({totalCount})
            </h1>

            <div className="flex flex-col">
                {items.map((item) => (
                    <CartItemRow key={item.product.id} item={item} />
                ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">Total</span>
                <span className="text-lg font-bold text-gray-900">
          ${totalAmount.toFixed(2)}
        </span>
            </div>

            <button
                onClick={() => navigate('/checkout')}
                className="mt-4 w-full rounded-lg bg-gray-900 py-3 text-sm font-medium text-white active:bg-gray-700"
            >
                Proceed to Checkout
            </button>
        </div>
    );
}