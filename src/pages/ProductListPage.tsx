import { products } from "../data/products.ts";
import { ProductCard } from '../components/ProductCard.tsx';

export function ProductListPage() {
    return (
        <div className="p-4">
            <h1 className="mb-4 text-xl font-bold text-gray-900">Products</h1>
            <div className="grid grid-cols-2 gap-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}