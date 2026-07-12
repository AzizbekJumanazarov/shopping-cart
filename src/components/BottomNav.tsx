import { NavLink } from "react-router-dom";
import { Home, ShoppingCart } from "lucide-react";
import { useCartTotals } from "../hooks/useCart";

export function BottomNav(){
    const { totalCount } = useCartTotals();
    const linkClass = ({ isActive }: { isActive:boolean }) =>
        `flex flex-col items-center gap-1 py-2 px-6 text-xs ${
        isActive ? 'text-gray-900' : 'text-gray-400'
    }`;

    return (
        <nav className="fixed bottom-0 left-0 right-0 flex justify-around border-t border-gray-200 bg-white pb-safe">
            <NavLink to="/" className={linkClass} end>
                <Home size={20} />
                Products
            </NavLink>

            <NavLink to="/cart" className={linkClass}>
                <div className="relative">
                    <ShoppingCart size={20} />
                    {totalCount > 0 && (
                        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              {totalCount}
            </span>
                    )}
                </div>
                Cart
            </NavLink>
        </nav>
    );
}