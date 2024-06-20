import { useLoaderData } from "react-router-dom";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import useCartStore from "src/zustand/useCartStore";

const ProductDetail = ({ initialRating }) => {
    const { product } = useLoaderData();
    const { addToCart } = useCartStore((state) => state);
    const [count, setCount] = useState(1);
    const [rating, setRating] = useState(initialRating);
    const [selectedImg, setSelectedImg] = useState(product?.images?.[0]);

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    const handleAddCart = () => {
        addToCart(product, count);
        console.log(count);
    };

    return (
        <div className="container py-8">
            <section className="page-wrapper">
                <div className="flex lg:flex-row flex-col gap-5 items-start">
                    <div className="lg:w-1/2 w-full flex md:flex-row flex-col gap-[10px]">
                        <div className="flex md:flex-col md:justify-between sm:flex-row">
                            {product?.images?.map((item, index) => (
                                <div key={index}>
                                    <img
                                        src={item}
                                        alt="Name"
                                        onClick={() => setSelectedImg(item)}
                                        className="cursor-pointer w-[110px] h-[110px]  object-cover "
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="lg:w-4/5 w-full">
                            <img
                                src={selectedImg}
                                alt={product.title}
                                className="w-[457.188px] h-[457.188px] object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-[24px] mb-3 text-[#1a1a1a] dark:text-white">
                            {product?.title}
                        </h1>
                        <div className="flex items-center gap-2 mb-3">
                            {/* <Rating rating={data?.rating} /> */}
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 ${
                                            index < product.rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        onClick={() => handleStarClick(index)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
                                        />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-[#ccc] font-light cursor-pointer transition-colors hover:text-primary">
                                ({product.rating} reviews)
                            </span>
                        </div>
                        <span className="text-[24px] mb-3 block text-primary font-bold">
                            ${product?.price}
                        </span>
                        <div>
                            <p className="text-[#777]">{product.description}</p>
                        </div>
                        <div
                            className="text-[#777] text-sm font-light mb-4 leading-7"
                            // dangerouslySetInnerHTML={{
                            //     __html: data?.description || "",
                            // }}
                        />
                        <div className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
                            <span className="text-sm">Qty:</span>
                            <div className="flex items-center">
                                <button
                                    onClick={() => {
                                        if (count >= 1) {
                                            setCount((prev) => prev - 1);
                                        }
                                    }}
                                    disabled={count <= 1}
                                    className="border border-gray w-10 h-10 transition-colors hover:text-primary"
                                >
                                    <HiOutlineMinusSmall className="w-full" />
                                </button>
                                <span className="border-y border-gray block w-10 h-10 text-center leading-10 text-sm">
                                    {count}
                                </span>

                                <button
                                    onClick={() => setCount((prev) => prev + 1)}
                                    className="border border-gray w-10 h-10 mx-auto transition-colors hover:text-primary"
                                >
                                    <GoPlus className="w-full" />
                                </button>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col items-center gap-5 mb-[30px]">
                            <button
                                onClick={handleAddCart}
                                className="flex items-center gap-2 transition-colors hover:bg-primary hover:text-white capitalize justify-center py-[10px] px-[15px] text-[16px] font-light min-w-[198px] border border-gray"
                            >
                                <MdAddShoppingCart /> Add to cart
                            </button>
                            <button
                                onClick={() => handleAddWishList(data)}
                                className="flex items-center gap-2 font-light hover:text-primary justify-center capitalize hover:border hover:border-primary py-[10px] px-[15px] text-[16px] min-w-[198px] border-white border transition-colors"
                            >
                                <FaRegHeart /> add to wishlist
                            </button>
                        </div>

                        <div className="flex justify-between py-[17px] border-t border-gray">
                            <div className="text-sm">
                                <span className="text-[#777]">
                                    Category:{" "}
                                    <span className="text-[#1a1a1a] hover:text-primary transition-colors cursor-pointer dark:text-white">
                                        {product.category.name ??
                                            "Unknown Category"}
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-[#777] text-sm">
                                <span>Share:</span>
                                <div className="flex gap-3 items-center">
                                    <FaFacebook className="w-6 h-6 cursor-pointer" />
                                    <FaTwitter className="w-6 h-6 cursor-pointer" />
                                    <FaYoutube className="w-6 h-6 cursor-pointer" />
                                    <FaPinterest className="w-6 h-6 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ProductDetail;
