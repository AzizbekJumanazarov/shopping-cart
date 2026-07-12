import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function OrderSuccess() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center gap-3 px-4 py-20 text-center">
            <CheckCircle size={56} className="text-green-500" />
            <h2 className="text-lg font-bold text-gray-900">Order Placed!</h2>
            <p className="text-sm text-gray-500">
                Thank you for your purchase. This is a demo — no real order was
                processed.
            </p>
            <button
                onClick={() => navigate('/')}
                className="mt-2 rounded-lg bg-gray-900 px-6 py-2 text-sm font-medium text-white"
            >
                Back to Products
            </button>
        </div>
    );
}