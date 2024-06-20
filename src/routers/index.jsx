import { createBrowserRouter } from "react-router-dom";
import HomePage from "src/components/HomePage/HomePage";
import Products from "src/components/Products/Products";
import LayoutRoot from "src/layouts/LayoutRoot";
import PageNotFound from "src/components/PageNotFound/PageNotFound";
import ProductDetail from "src/components/Products/ProductDetail";
import Cart from "src/components/Cart/Cart";
import Blog from "src/components/Blogs/Blog";
import About from "src/components/About/About";

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
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

export default router;
