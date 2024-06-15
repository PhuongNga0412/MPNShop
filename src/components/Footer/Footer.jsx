import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "About",
        link: "#",
    },
    {
        id: 3,
        name: "Contact",
        link: "#",
    },
    {
        id: 4,
        name: "Blog",
        link: "#",
    },
];

const Footer = () => {
    return (
        <div className="dark:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className="py-8 px-4">
                        <a
                            href="#"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        >
                            MPNShop
                        </a>
                        <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Sunt nihil animi reiciendis quo aliquid
                            quidem.
                        </p>
                        <p className="text-gray-500 mt-4">Made with MPN</p>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3">
                                Important Links
                            </h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left mb-3">
                                Quick Links
                            </h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-bold sm:text-left mb-3">
                                Address
                            </h1>
                            <div>
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Hanoi, VietNam</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <FaMobileAlt />
                                    <p>+84 983337723</p>
                                </div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaInstagram className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className="text-3xl hover:text-brandBlue duration-300" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
