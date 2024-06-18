import Hero from "src/components/HomePage/Hero/Hero";
import Category from "src/components/HomePage/Category/Category";
import Services from "src/components/HomePage/Services/Services";
import Products from "src/components/HomePage/Products/Products";
import Blog from "src/components/HomePage/Blog/Blog";
import Partners from "src/components/HomePage/Partners/Partners";

const HomePage = () => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Hero />
            <Category />
            <Services />
            <Products />
            <Blog />
            <Partners />
        </div>
    );
};
export default HomePage;
