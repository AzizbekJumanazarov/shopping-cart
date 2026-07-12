import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from './useCartStore';
import type { Product } from '../types';

const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    price: 10,
    image: 'test.jpg',
};

const mockProduct2: Product = {
    id: '2',
    name: 'Second Product',
    price: 25,
    image: 'test2.jpg',
};

describe('useCartStore', () => {

    beforeEach(() => {
        useCartStore.setState({ items: [] });
    });

    it('starts with an empty cart', () => {
        expect(useCartStore.getState().items).toHaveLength(0);
    });

    it('adds a new product to the cart with quantity 1', () => {
        useCartStore.getState().addToCart(mockProduct);

        const { items } = useCartStore.getState();
        expect(items).toHaveLength(1);
        expect(items[0].quantity).toBe(1);
        expect(items[0].product.id).toBe('1');
    });

    it('increases quantity when the same product is added again', () => {
        const { addToCart } = useCartStore.getState();
        addToCart(mockProduct);
        addToCart(mockProduct);

        const { items } = useCartStore.getState();
        expect(items).toHaveLength(1);
        expect(items[0].quantity).toBe(2);
    });

    it('increases quantity with increaseQty', () => {
        const { addToCart, increaseQty } = useCartStore.getState();
        addToCart(mockProduct);
        increaseQty('1');

        expect(useCartStore.getState().items[0].quantity).toBe(2);
    });

    it('decreases quantity with decreaseQty', () => {
        const { addToCart, increaseQty, decreaseQty } = useCartStore.getState();
        addToCart(mockProduct);
        increaseQty('1'); // qty: 2
        decreaseQty('1'); // qty: 1

        expect(useCartStore.getState().items[0].quantity).toBe(1);
    });

    it('removes the item automatically when quantity drops below 1', () => {
        const { addToCart, decreaseQty } = useCartStore.getState();
        addToCart(mockProduct); // qty: 1
        decreaseQty('1'); // should remove

        expect(useCartStore.getState().items).toHaveLength(0);
    });

    it('removes a product with removeFromCart', () => {
        const { addToCart, removeFromCart } = useCartStore.getState();
        addToCart(mockProduct);
        addToCart(mockProduct2);
        removeFromCart('1');

        const { items } = useCartStore.getState();
        expect(items).toHaveLength(1);
        expect(items[0].product.id).toBe('2');
    });

    it('does nothing when decreasing a product not in the cart', () => {
        const { decreaseQty } = useCartStore.getState();
        decreaseQty('nonexistent-id');

        expect(useCartStore.getState().items).toHaveLength(0);
    });

    it('clears the entire cart', () => {
        const { addToCart, clearCart } = useCartStore.getState();
        addToCart(mockProduct);
        addToCart(mockProduct2);
        clearCart();

        expect(useCartStore.getState().items).toHaveLength(0);
    });

    it('calculates total quantity and amount correctly across multiple products', () => {
        const { addToCart, increaseQty } = useCartStore.getState();
        addToCart(mockProduct); // 1 x $10
        addToCart(mockProduct2); // 1 x $25
        increaseQty('1'); // 2 x $10

        const { items } = useCartStore.getState();
        const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
        const totalAmount = items.reduce(
            (sum, i) => sum + i.product.price * i.quantity,
            0
        );

        expect(totalCount).toBe(3);
        expect(totalAmount).toBe(45);
    });
});