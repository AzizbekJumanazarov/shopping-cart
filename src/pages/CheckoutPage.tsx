import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { checkoutSchema, type CheckoutFormData } from "../schemas/checkoutSchema";
import { useCartStore } from "../store/useCartStore";
import { useCartTotals } from "../hooks/useCart";
import { OrderSuccess } from "../components/OrderSuccess";

export function CheckoutPage() {
    const items = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);
    const { totalAmount } = useCartTotals();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema)
    });

    if(items.length === 0 && !orderPlaced) {
        navigate('/', { replace: true });
        return null;
    }

    if(orderPlaced){
        return <OrderSuccess />;
    }

    const onSubmit = async () => {
        await new Promise((resolve) => setTimeout(resolve, 600));
        clearCart();
        setOrderPlaced(true);
    }

    return (
        <div className="p-4">
            <h1 className="mb-4 text-xl font-bold text-gray-900">Checkout</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        {...register('fullName')}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        placeholder="John Doe"
                    />
                    {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.fullName.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        {...register('phone')}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        placeholder="+998 90 123 45 67"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        {...register('address')}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        placeholder="Street, house number"
                    />
                    {errors.address && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.address.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        City
                    </label>
                    <input
                        {...register('city')}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                        placeholder="Tashkent"
                    />
                    {errors.city && (
                        <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
                    )}
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-500">Total</span>
                    <span className="text-lg font-bold text-gray-900">
            ${totalAmount.toFixed(2)}
          </span>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-gray-900 py-3 text-sm font-medium text-white active:bg-gray-700 disabled:opacity-50"
                >
                    {isSubmitting ? 'Placing Order...' : 'Place Order'}
                </button>
            </form>
        </div>
    );
}