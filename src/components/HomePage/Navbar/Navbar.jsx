import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchStore } from "src/zustand/store";
import useCartStore from "src/zustand/useCartStore";

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 3,
        name: "Products",
        link: "/product",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/blog",
    },
];

const Navbar = () => {
    const { searchTerm, setSearchTerm } = useSearchStore();
    const { getCartItem, cart } = useCartStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        getCartItem();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            setSearchTerm(event.target.value.trim());
        }
    };

    return (
        // <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        //     <div className="py-4">
        //         <div className="container flex justify-between items-center">
        //             <div className="flex items-center gap-4">
        // <Link
        //     to="/"
        //     className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
        // >
        //     MPNShop
        // </Link>
        //                 <div className="hidden lg:block">
        //                     <ul className="flex items-center gap-4">
        //                         {MenuLinks.map((item) => (
        //                             <li key={item.id}>
        //                                 <Link
        //                                     to={item.link}
        //                                     className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
        //                                 >
        //                                     {item.name}
        //                                 </Link>
        //                             </li>
        //                         ))}
        //                         <li className="relative cursor-pointer group ">
        //                             <Link
        //                                 to="product"
        //                                 className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
        //                             >
        //                                 Products
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="flex justify-between items-center gap-4">
        //                 <div className="relative group hidden sm:block">
        //                     <input
        // type="text"
        // placeholder="Search"
        // className="search-bar"
        // value={searchTerm}
        // onChange={(event) =>
        //     setSearchTerm(event.target.value)
        // }
        // onKeyDown={handleSearch}
        //                     />
        //                     <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
        //                 </div>
        // <Link to="/cart" className="relative p-3">
        //     <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
        //     <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs ">
        //         {cart.length}
        //     </div>
        // </Link>
        // <div>
        //     <DarkMode />
        // </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <nav className="container bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to="/"
                    className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                >
                    MPNShop
                </Link>

                <div className="flex md:order-2 items-center gap-3 md:gap-1">
                    <div>
                        <DarkMode />
                    </div>
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <div>
                        <Link to="/cart" className="relative p-3">
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-[25px] -right-[15px] flex items-center justify-center text-xs ">
                                {cart.length}
                            </div>
                        </Link>
                    </div>

                    <button
                        data-collapse-toggle="navbar-search"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-search"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between ${
                        isMenuOpen ? "block" : "hidden"
                    } w-full md:flex md:w-auto md:order-1`}
                    id="navbar-search"
                >
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {MenuLinks.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={item.link}
                                    className="block py-2 px-3 font-semibold text-gray-500 hover:text-black  rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-500 dark:hover:text-white"
                                    aria-current="page"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
