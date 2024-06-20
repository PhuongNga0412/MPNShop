import api from "./axiosClient";

const CART_ENDPOINT = "/cart/";

const addCart = async (product, count) => {
    try {
        const response = await api.post(CART_ENDPOINT, {
            ...product,
            quantity: count ? count : 1,
        });
        return response.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
    }
};

const getCartItems = async () => {
    try {
        const response = await api.get(CART_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart items:", error);
        throw error;
    }
};

const deleteCartItems = (productId) => {
    return api.delete(CART_ENDPOINT + productId);
};

const updateQuantity = async (productId, body) => {
    try {
        await api.put(CART_ENDPOINT + productId, body);
    } catch (error) {
        console.error("Error fetching cart items:", error);
        throw error;
    }
};

export { getCartItems, addCart, deleteCartItems, updateQuantity };
