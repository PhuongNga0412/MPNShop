import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "src/components/HomePage/Footer/Footer";
import Navbar from "src/components/HomePage/Navbar/Navbar";

const LayoutRoot = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar />
            <Outlet />
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={localStorage.getItem("theme")}
                transition={Bounce}
            />
            <Footer />
        </div>
    );
};
export default LayoutRoot;
