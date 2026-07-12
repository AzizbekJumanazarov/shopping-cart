import { Minus, Plus } from 'lucide-react';

interface QuantityControlProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export function QuantityControl({
    quantity,
    onIncrease,
    onDecrease
} : QuantityControlProps) {
    return (
        <div className="flex items-center gap-3">
            <button
                onClick={onDecrease}
                aria-label="Decrease quantity"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 active:bg-gray-200"
            >
                <Minus size={16} />
            </button>

            <span className="w-6 text-center font-medium">{quantity}</span>

            <button
                onClick={onIncrease}
                aria-label="Increase quantity"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 active:bg-gray-200"
            >
                <Plus size={16} />
            </button>
        </div>
    );
}