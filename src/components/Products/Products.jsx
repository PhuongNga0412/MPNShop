import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductItem from "./ProductItem";
import { useProductStore, useSearchStore } from "src/zustand/store";

const Products = () => {
    const { products, fetch, loading, hasErrors } = useProductStore();
    const { searchTerm } = useSearchStore();
    const [sort, setSort] = useState();
    const [checked, setChecked] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        fetch();
    }, []);

    if (loading)
        return (
            <div>
                <div className="w-full gap-x-2 flex justify-center items-center">
                    <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"></div>
                    <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
                    <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"></div>
                </div>
            </div>
        );
    if (hasErrors) return <div>Something went wrong...</div>;

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const handleCheck = (item) => {
        setChecked((prev) => {
            const isChecked = checked.includes(item);
            if (isChecked) {
                return checked.filter((it) => it !== item);
            } else {
                return [...prev, item];
            }
        });
    };

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (checked.length === 0 || checked.includes(product.category.name))
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
        switch (sort) {
            case "price":
                return a.price - b.price;
            case "-price":
                return b.price - a.price;
            case "mostPopular":
            default:
                return 0;
        }
    });

    const displayedProducts = sortedProducts.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const type = [...new Set(products.map((item) => item.category.name))];

    return (
        <div className="container py-8">
            <section className="page-wrapper flex gap-5">
                <div className="w-1/4 hidden lg:block">
                    <div className="flex pt-[6px] pb-5 mb-5 justify-between border-b border-gray">
                        <span className="text-sm text-[#1a1a1a] dark:text-white">
                            Filters:
                        </span>
                        <button
                            className="text-xs"
                            onClick={() => setChecked([])}
                        >
                            Clean All
                        </button>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg">Category</h3>
                            <button>
                                <FiChevronDown className="w-5 h-5 text-[#1a1a1a]" />
                            </button>
                        </div>

                        <div className="pt-[10px] pb-[20px] opacity-1 ">
                            {type?.map((item) => (
                                <div
                                    key={item}
                                    className="text-[#1a1a1a] text-sm flex items-center gap-3 mb-2"
                                >
                                    <input
                                        type="checkbox"
                                        id={item}
                                        className="w-4 h-4"
                                        checked={checked.includes(item)}
                                        onChange={() => handleCheck(item)}
                                    />
                                    <label className="dark:text-white">
                                        {item}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:w-3/4 w-full">
                    <div className="flex pt-[6px] mb-5 lg:justify-between items-center gap-2 lg:items-start lg:flex-row flex-col ">
                        <div className="text-sm text-[#ccc]">
                            Showing{" "}
                            <span className="text-[#1a1a1a] dark:text-primary">
                                {displayedProducts.length}
                            </span>{" "}
                            of{" "}
                            <span className="text-[#1a1a1a] dark:text-primary">
                                {products.length}
                            </span>{" "}
                            Products
                        </div>
                        <div className="text-sm flex items-center gap-2">
                            <span className="text-xs text-[#1a1a1a]">
                                Sort by:
                            </span>
                            <select
                                name="sort"
                                id="sort"
                                className="border max-w-[180px] min-w-[140px] border-gray outline-none cursor-pointer py-[4.5px] px-[10px] text-[#999]"
                                onChange={handleSortChange}
                                value={sort}
                            >
                                <option value="mostPopular">
                                    Most Popular
                                </option>
                                <option value="price">Price Low to High</option>
                                <option value="-price">
                                    Price High to Low
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {displayedProducts?.map((item) => (
                            <div key={item.id}>
                                <ProductItem item={item} />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <ReactPaginate
                            previousLabel={"< previous"}
                            nextLabel={"next >"}
                            breakLabel="..."
                            pageCount={Math.ceil(
                                filteredProducts.length / itemsPerPage
                            )}
                            pageRangeDisplayed={3}
                            forcePage={currentPage}
                            onPageChange={handlePageClick}
                            activeClassName="text-red-700 font-bold dark:text-red-700 "
                            containerClassName="inline-flex -space-x-px text-sm"
                            pageLinkClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            previousLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            nextLinkClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            breakLinkClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            activeLinkClassName="flex items-center justify-center px-3 h-8 text-red-700 font-semibold border-gray-300 bg-red-100 dark:text-red-700 "
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
