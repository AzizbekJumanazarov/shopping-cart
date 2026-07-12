import { products } from "./data/products.ts";
import { ProductCard } from './components/ProductCard.tsx';

function App() {
  return (
      <div className="min-h-screen bg-gray-50 p-4">
          <h1 className="mb-4 text-xl font-bold">Products</h1>
          <div className="grid grid-cols-2 gap-3">
              {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
              ))}
          </div>
      </div>
  );
}
export default App;