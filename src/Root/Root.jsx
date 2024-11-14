import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Root = () => {
    return (
        <div className="w-full mx-auto bg-gray-100 font-noto">
            <Header></Header>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;