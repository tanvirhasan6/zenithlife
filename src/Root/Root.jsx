import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="w-full mx-auto">
            <Header></Header>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;