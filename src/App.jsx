import Navbar from "components/Navbar/Navbar";
import "./App.css";
import Hero from "components/Hero/Hero";
import Category from "components/Category/Category";
// import Category2 from "components/Category/Category2";
import Services from "components/Services/Services";
import Products from "components/Products/Products";
import Blog from "components/Blog/Blog";
import Partners from "components/Partners/Partners";
import Footer from "components/Footer/Footer";

function App() {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar />
            <Hero />
            <Category />
            {/* <Category2 /> */}
            <Services />
            <Products />
            <Blog />
            <Partners />
            <Footer />
        </div>
    );
}

export default App;
