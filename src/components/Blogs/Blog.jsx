import { Link } from "react-router-dom";
import Category from "../HomePage/Category/Category";

const blogs = [
    {
        id: 1,
        img: "https://cfdshop.hn.ss.bfcplatform.vn/images/blog/twWE1fUxtMTZbVnmRXCKy-fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
        category: "Entertainment",
        title: "Improving your day to the MAX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        author: "Jack Sparrow",
        date: "23rd, March 2021",
    },
    {
        id: 2,
        img: "https://cfdshop.hn.ss.bfcplatform.vn/images/blog/i1hC6_3aspDxuriq2Y5A1-carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg",
        category: "Entertainment",
        title: "Improving your day to the MAX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        author: "Jack Sparrow",
        date: "23rd, March 2021",
    },
    {
        id: 3,
        img: "https://cfdshop.hn.ss.bfcplatform.vn/images/blog/EHV03GR2MjxPf78sA7qZt-luke-chesser-A5-Xr7WyktQ-unsplash.jpg",
        category: "Entertainment",
        title: "Improving your day to the MAX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        author: "Jack Sparrow",
        date: "23rd, March 2021",
    },
    {
        id: 4,
        img: "https://cfdshop.hn.ss.bfcplatform.vn/images/blog/ZIdshLhRy0nMSXVwWSn40-christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg",
        category: "Entertainment",
        title: "Improving your day to the MAX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        author: "Jack Sparrow",
        date: "23rd, March 2021",
    },
];

const Blog = () => {
    return (
        <div className="container">
            <div className="text-gray-900 pr-0 pb-8 pl-0 bg-white dark:bg-gray-900">
                <div className="w-full pt-4 pb-6 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
                    <div className="flex flex-col items-center sm:px-5 md:flex-row">
                        <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                                <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase inline-block">
                                    <p className="inline">
                                        <svg
                                            className="w-3.5 h-3.5 mr-1"
                                            fill="currentColor"
                                            viewbox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </p>
                                    <p className="inline text-xs font-medium">
                                        New
                                    </p>
                                </div>
                                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl dark:text-white">
                                    Write anything. Be creative.
                                </a>
                                <div className="pt-2 pr-0 pb-0 pl-0">
                                    <p className="text-sm font-medium inline dark:text-gray-500">
                                        author:
                                    </p>
                                    <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline dark:text-white">
                                        Jack Sparrow
                                    </a>
                                    <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 dark:text-white">
                                        · 23rd, April 2021 ·
                                    </p>
                                    <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
                                        read
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="block">
                                <img
                                    src="https://www.fujitsu.com/global/imagesgig5/img-teaser-banner-products-800x450px_tcm100-7543214_tcm100-6286607-32.jpg"
                                    className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
                        {blogs.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
                            >
                                <img
                                    src={item.img}
                                    className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
                                />
                                <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
                                    {item.category}
                                </p>
                                <a className="text-lg font-bold sm:text-xl md:text-2xl dark:text-white">
                                    {item.title}
                                </a>
                                <p className="text-sm text-black dark:text-gray-500">
                                    {item.desc}
                                </p>
                                <div className="pt-2 pr-0 pb-0 pl-0">
                                    <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline dark:text-white">
                                        {item.author}
                                    </a>
                                    <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1 dark:text-white">
                                        · {item.date} ·
                                    </p>
                                    <Link
                                        to=""
                                        className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1"
                                    >
                                        read
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Blog;
