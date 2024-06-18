import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
    return (
        <div className="w-full p-4 relative overflow-visible ">
            <Link to={`/product/product-detail/${data.id}`}>
                <img
                    className="h-[40%] w-full border rounded-lg transition duration-300 ease"
                    src={data.images[0]}
                    alt={data.title}
                />
            </Link>
            <div className="pt-[10%]">
                <div className="min-h-[60px]">
                    <Link
                        to={`/product/product-detail/${data.id}`}
                        className="font-semibold text-lg "
                    >
                        {data.title}
                    </Link>
                </div>
                <p className="mb-[10px] line-clamp-2 text-[#777]">
                    {data.description}
                </p>
            </div>
            <div className="w-full flex justify-between items-center pt-[10px] border-t-2">
                <span className="font-black text-xl leading-tight text-primary">
                    ${data.price}
                </span>
                <div className="flex cursor-pointer text-xl">
                    <FaCartShopping />
                </div>
            </div>
        </div>
    );
};
export default ProductCard;
