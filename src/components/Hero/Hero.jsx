import Slider from "react-slick";
import Slice1 from "src/assets/img/iphone.webp";
import Slice2 from "src/assets/img/laptop.webp";
import Button from "../Shared/Button";

const HeroSlice = [
    {
        id: 1,
        img: Slice1,
        subtitle: "Iphone",
        title: "Brand",
        title2: "Smartphone",
    },
    {
        id: 2,
        img: Slice2,
        subtitle: "Laptop",
        title: "Brand",
        title2: "Laptop",
    },
];

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className="container">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {HeroSlice.map((item) => (
                            <div key={item.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                                            {item.subtitle}
                                        </h1>
                                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                            {item.title}
                                        </h1>
                                        <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                                            {item.title2}
                                        </h1>
                                        <div>
                                            <Button
                                                text="Shop Now"
                                                bgColor="bg-primary"
                                                textColor="text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="order-1 sm:order-2">
                                        <div>
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
export default Hero;
