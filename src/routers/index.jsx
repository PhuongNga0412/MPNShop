import { createBrowserRouter } from "react-router-dom";
import HomePage from "src/components/HomePage/HomePage";
import Products from "src/components/Products/Products";
import LayoutRoot from "src/layouts/LayoutRoot";
import PageNotFound from "src/components/PageNotFound/PageNotFound";
import ProductDetail from "src/components/Products/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "/product",
                element: <Products />,
            },
            {
                path: "product/product-detail/:id",
                element: <ProductDetail />,
                loader: async ({ params }) => {
                    const response = await fetch(
                        `http://localhost:3000/products/${params.id}`
                    );
                    if (!response.ok) {
                        throw new Error("Failed to fetch user details");
                    }
                    const product = await response.json();
                    return { product };
                },
            },
        ],
    },
]);

export default router;
