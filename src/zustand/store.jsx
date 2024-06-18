import { getProducts } from "src/services/productService";
import { create } from "zustand";

const useProductStore = create((set) => ({
    products: [],
    // totalPage: 0,
    loading: false,
    hasErrors: false,
    fetch: async (params) => {
        set(() => ({ loading: true }));
        try {
            const response = await getProducts(params);
            set((state) => ({
                products: response.data,
                // totalPage: response.data.pages,
                // products: (state.data = response.data.data),
                // totalPage: (state.data = response.data.pages),
                loading: false,
            }));
        } catch (err) {
            set(() => ({ hasErrors: true, loading: false }));
        }
    },
}));

const useSearchStore = create((set) => ({
    searchTerm: "",
    setSearchTerm: (term) => set({ searchTerm: term }),
}));

export { useProductStore, useSearchStore };
