import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useProductStore } from "src/zustand/store";
import Slider from "react-slick";

const Products = () => {
    const { products, fetch } = useProductStore();
    useEffect(() => {
        fetch({
            _limit: 10,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
                    <Link
                        to="/product"
                        className="text-3xl font-bold lg:text-4xl"
                    >
                        Our Products
                    </Link>
                    <p className="text-xs text-gray-400">
                        Explore Our Products
                    </p>
                </div>

                <div>
                    <div className="w-full sm:pb-0">
                        <Slider {...settings}>
                            {products.map((item) => (
                                <ProductCard key={item.id} data={item} />
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="flex justify-end items-center font-bold text-brandBlue">
                    <Link to="/product">See More...</Link>
                </div>
            </div>
        </div>
    );
};
export default Products;

// export const formatMoney = (money: number) => {
//     return money?.toLocaleString('vi', { style: 'currency', currency: 'VND' });
//   };
