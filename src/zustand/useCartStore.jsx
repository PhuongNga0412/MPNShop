import { toast } from "react-toastify";
import {
    addCart,
    getCartItems,
    updateQuantity,
} from "src/services/cartService";
import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],

    addToCart: async (product, count) =>
        set(async (state) => {
            const existingProduct = state.cart.find(
                (item) => item.id === product.id
            );
            if (existingProduct) {
                await updateQuantity(product.id, {
                    ...product,
                    quantity: existingProduct.quantity + count,
                });
            } else {
                await addCart(product, count);
            }
            toast.success("Add cart");
            await state.getCartItem();
        }),

    getCartItem: async () => {
        const res = await getCartItems();
        set({
            cart: [...res],
        });
    },
}));

export default useCartStore;
