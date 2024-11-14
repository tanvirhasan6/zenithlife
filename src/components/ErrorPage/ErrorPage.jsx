import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LangContext } from "../../contexts/LanguageContext";


const ErrorPage = () => {

    const {lang} = useContext(LangContext);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-5 bg-gray-200">
            <h3 className="text-5xl text-red-500 font-bold">
                {lang==='English' ? 'Oops! Content Not Found.' : 'কনটেন্ট টি পাওয়া যায় নি।'}
            </h3>
            <Link to="/" className=""><FaArrowLeft/></Link>
        </div>
    );
};

export default ErrorPage;