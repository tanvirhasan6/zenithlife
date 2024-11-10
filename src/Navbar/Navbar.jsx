
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { FaLanguage } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';
import { useState } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);

    const handleDropDown = () => {
        setDropdown((prevDropdown) => !prevDropdown);
    }

    return (

        <div className='w-full'>
            <div className="sticky top-0 z-10 navbar bg-white shadow-sm">
                <div className='navbar-start'>
                    <div className="dropdown">
                        <div>
                            {
                                dropdown ? <RiCloseLargeFill onClick={handleDropDown} /> : <CgMenuLeft onClick={handleDropDown} />
                            }
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <NavLink to="/">
                        <img className='w-[80px] md:w-[120px]' src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className='navbar-end'>
                    <FaLanguage />
                    <select className="text-xs pl-1">
                        <option>English</option>
                        <option selected>বাংলা</option>
                    </select>
                </div>
            </div >

            <div className={`w-full h-[450px] ${dropdown ? 'flex' : 'hidden'}`}>

                <nav>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </div>

        </div>

    );
};

export default Navbar;