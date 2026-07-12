import { Header } from "../components/Header";
import { products } from "../data/products.ts";
import { ProductCard } from '../components/ProductCard.tsx';

export function ProductListPage() {
    return (
        <div>
            <Header title="Products" />
            <div className="grid grid-cols-2 gap-3 p-4">
                {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} priority={index < 4} />
                ))}
            </div>
        </div>
    );
}