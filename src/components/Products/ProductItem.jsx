import { Link } from "react-router-dom";
import useCartStore from "src/zustand/useCartStore";

const ProductItem = ({ item }) => {
    const { addToCart } = useCartStore((state) => state);
    const handleAddCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="group mb-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                to={`/product/product-detail/${item.id}`}
            >
                {item.images.map((imgSrc, index) => (
                    <img
                        key={index}
                        className={`peer absolute top-0 ${
                            index === 0 ? "right-0" : "-right-96"
                        } h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0`}
                        src={imgSrc}
                        alt={`product image ${index + 1}`}
                    />
                ))}
                {/* <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src={item.img1}
                    alt="product image"
                />
                <img
                    className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                    src={item.img2}
                    alt="product image"
                /> */}
                <svg
                    className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                >
                    <path
                        fill="currentColor"
                        d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                    />
                </svg>
            </Link>
            <div className="mt-4 px-5 pb-5">
                <Link
                    to={`/product/product-detail/${item.id}`}
                    className="text-xl tracking-tight text-slate-900 dark:text-white line-clamp-2 min-h-[60px]"
                >
                    {item.title}
                </Link>

                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900 dark:text-primary">
                            ${item.price}
                        </span>
                        <span className="text-sm text-slate-900 line-through dark:text-white ml-2">
                            $699
                        </span>
                    </p>
                </div>
                <button
                    onClick={() => handleAddCart(item)}
                    className="flex w-full items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/70 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    );
};
export default ProductItem;
