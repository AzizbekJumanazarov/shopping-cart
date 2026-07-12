import { useCartStore } from "./store/useCartStore.ts";
import { products } from "./data/products.ts";

function App() {
  const { items, addToCart } = useCartStore();

  return (
      <div>
        <button onClick={() => addToCart(products[0])}>
          Test Add
        </button>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </div>
  );
}
export default App;