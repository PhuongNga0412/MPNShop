import api from "./axiosClient";

const PRODUCT_ENDPOINT = "/products";

const getProducts = (params) => {
    return api.get(PRODUCT_ENDPOINT, { params });
};

export { getProducts };
