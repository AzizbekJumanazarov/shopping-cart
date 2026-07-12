import { Routes, Route } from 'react-router-dom';
import { ProductListPage } from './pages/ProductListPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { BottomNav } from './components/BottomNav';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Routes>
                <Route path="/" element={<ProductListPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            <BottomNav />
        </div>
    );
}

export default App;