import Button from "src/components/HomePage/Shared/Button";
import Img1 from "src/assets/img/category/earphone.webp";
import Img2 from "src/assets/img/category/laptop.webp";
import Img4 from "src/assets/img/category/watch.webp";

const Category = () => {
    return (
        <dir className="container py-8">
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-gray-400">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2 ">
                                    Earphone
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <img
                            src={Img1}
                            alt=""
                            className="w-[320px] absolute bottom-0"
                        />
                    </div>
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2 ">
                                    Gadget
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-brandYellow"}
                                />
                            </div>
                        </div>
                        <img
                            src={Img4}
                            alt=""
                            className="w-[150px] absolute right-7 lg:top-[30px]"
                        />
                    </div>
                    <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2 ">
                                    Laptop
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-primary"}
                                />
                            </div>
                        </div>
                        <img
                            src={Img2}
                            alt=""
                            className="w-[350px] absolute top-1/2 -translate-y-1/2 right-5"
                        />
                    </div>
                </div>
            </div>
        </dir>
    );
};
export default Category;
