
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { FaLanguage } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';
import { useContext, useState } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';
import { LangContext } from '../contexts/LanguageContext';

const Navbar = () => {

    const {lang,setLang} = useContext(LangContext);

    const [dropdown, setDropdown] = useState(false);

    const handleDropDown = () => {
        setDropdown((prevDropdown) => !prevDropdown);
    }

    const handleLang = (e) =>{
        setLang(e);        
    }

    return (

        <div className='w-full relative mb-20'>
            <div className="fixed top-0 z-10 navbar bg-white shadow-sm">
                <div className='navbar-start'>
                    <div className='flex flex-row justify-center items-center gap-1 text-sm'>
                        {
                            dropdown ? <RiCloseLargeFill onClick={handleDropDown} />
                                :
                                <>
                                    <CgMenuLeft onClick={handleDropDown} /> 
                                    {
                                        lang==='বাংলা' ? 'মেনু' : 'Menu' 
                                    }
                                </>
                        }
                    </div>
                </div>
                <div className="navbar-center">
                    <NavLink to="/">
                        <img className='w-[80px] md:w-[120px]' src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className='navbar-end gap-2'>
                    <FaLanguage />
                    <select
                        className="text-xs pl-1"
                        name="lang"
                        value={lang}
                        onChange={(e) => handleLang(e.target.value)}
                    >
                        <option>English</option>
                        <option>বাংলা</option>
                    </select>
                </div>
            </div >

            <div className={`w-full min-h-3/6 ${dropdown ? 'flex' : 'hidden'} bg-slate-100 grid-cols-2 md:grid-cols-3 justify-around items-start z-10 fixed top-16 left-0 py-10 shadow-sm`}>

                <div className='flex flex-col justify-start items-start gap-1'>
                    <h5 className='font-bold text-lg'>About Us</h5>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <h5 className='font-bold text-lg'>Service</h5>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <h5 className='font-bold text-lg'>Support</h5>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </div>

        </div>

    );
};

export default Navbar;