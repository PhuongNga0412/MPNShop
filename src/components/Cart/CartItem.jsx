import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { deleteCartItems, updateQuantity } from "src/services/cartService";
import useCartStore from "src/zustand/useCartStore";

const CartItem = ({ cartItem }) => {
    const { getCartItem } = useCartStore();

    const decrementQuantity = async () => {
        if (cartItem.quantity > 1) {
            await updateQuantity(cartItem.id, {
                ...cartItem,
                quantity: cartItem.quantity - 1,
            });
            getCartItem();
        }
    };

    const incrementQuantity = async () => {
        await updateQuantity(cartItem.id, {
            ...cartItem,
            quantity: cartItem.quantity + 1,
        });
        getCartItem();
    };

    const handleDeleteCartItem = async () => {
        await deleteCartItems(cartItem.id);
        getCartItem();
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                    <img
                        className="h-20 w-20 "
                        src={cartItem.images?.[0]}
                        alt={cartItem.title}
                    />
                </a>

                <label htmlFor="counter-input" className="sr-only">
                    Choose quantity:
                </label>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                        <button
                            onClick={decrementQuantity}
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="counter-input"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h16"
                                />
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="counter-input"
                            data-input-counter
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            placeholder=""
                            defaultValue={cartItem.quantity}
                            required
                        />
                        <button
                            onClick={incrementQuantity}
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                            ${cartItem.price * cartItem.quantity}
                        </p>
                    </div>
                </div>

                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                    >
                        {cartItem.title}
                    </a>
                    <p className="text-gray-400 font-bold">${cartItem.price}</p>
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                        >
                            <FaRegHeart className="text-lg mr-1" />
                            Add to Favorites
                        </button>

                        <button
                            onClick={handleDeleteCartItem}
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                            <MdOutlineCancel className="text-lg mr-1" />
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
