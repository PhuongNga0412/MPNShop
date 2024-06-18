import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSearchStore } from "src/zustand/store";

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
        name: "Blogs",
        link: "/blog",
    },
];

// const DropdownLinks = [
//     {
//         id: 1,
//         name: "Smartphone",
//         link: "/product/smartphone",
//     },
//     {
//         id: 2,
//         name: "Laptop",
//         link: "/product/laptop",
//     },
//     {
//         id: 3,
//         name: "Tablet",
//         link: "/product/tablet",
//     },
// ];

const Navbar = () => {
    const { searchTerm, setSearchTerm } = useSearchStore();

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            setSearchTerm(event.target.value.trim());
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        >
                            MPNShop
                        </Link>
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            to={item.link}
                                            className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className="relative cursor-pointer group ">
                                    <Link
                                        to="product"
                                        className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                                    >
                                        Products
                                        {/* <span>
                                            <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                        </span> */}
                                    </Link>
                                    {/* <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white ">
                                        <ul className="space-y-2 ">
                                            {DropdownLinks.map((item) => (
                                                <li key={item.id}>
                                                    <Link
                                                        to={item.link}
                                                        className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-bar"
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                onKeyDown={handleSearch}
                            />
                            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                        </div>
                        <button className="relative p-3">
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs ">
                                4
                            </div>
                        </button>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
