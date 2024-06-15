import ProductCard from "./ProductCard";
import Img from "src/assets/img/category/laptop.webp";
import Img2 from "src/assets/img/products/reno.jpg";

const ProductData = [
    {
        id: 1,
        img: Img,
        title: "Boad Headphone",
        price: "120",
    },
    {
        id: 2,
        img: Img2,
        title: "Boad Headphone 1",
        price: "120",
    },
    {
        id: 3,
        img: Img,
        title: "Boad Headphone 2",
        price: "120",
    },
    {
        id: 4,
        img: Img,
        title: "Boad Headphone 3",
        price: "120",
    },
];

const Products = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
                    <h1 className="text-3xl font-bold lg:text-4xl">
                        Our Products
                    </h1>
                    <p className="text-xs text-gray-400">
                        Explore Our Products
                    </p>
                </div>
                <ProductCard data={ProductData} />
            </div>
        </div>
    );
};
export default Products;
