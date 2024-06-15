import React from "react";
import Img from "src/assets/img/blogs/blog1.jpg";

const BlogData = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        published: "Jan 20, 2024 by Dilshad",
        img: Img,
    },
    {
        id: 2,
        title: "How to choose perfect smartwatch",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        published: "Jan 20, 2024 by Dilshad",
        img: Img,
    },
    {
        id: 3,
        title: "How to choose perfect smartwatch",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        published: "Jan 20, 2024 by Dilshad",
        img: Img,
    },
];

const Blog = () => {
    return (
        <div className="my-12">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
                    <h1 className="text-3xl font-bold lg:text-4xl">
                        Recent News
                    </h1>
                    <p className="text-xs text-gray-400">Explore Our Blogs</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {BlogData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-gray-900"
                        >
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500">
                                    {item.published}
                                </p>
                                <p className="font-bold line-clamp-1">
                                    {item.title}
                                </p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Blog;
