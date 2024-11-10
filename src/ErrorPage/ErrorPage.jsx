import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-5 bg-gray-200">
            <h3 className="text-5xl text-red-500 font-bold">Oops! Content Not Found.</h3>
            <Link to="/" className=""><FaArrowLeft/></Link>
        </div>
    );
};

export default ErrorPage;