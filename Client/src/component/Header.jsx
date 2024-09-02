import React from 'react'
import logo from "../assets/logo.jpg";
import userlogo from "../assets/userlogo.png";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const useremail = localStorage.getItem('emailToken');

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('emailToken');
        navigate("/login");
    }
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900" >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo" />
                        <span className="self-center text-[1.7rem] font-semibold whitespace-nowrap dark:text-white">Data Graphicss</span>
                    </Link>

                    <div className="flex items-center md:order-2 space-x-3">
                        {
                            !localStorage.getItem('token') ? (
                                <Link to={'/login'}>
                                    <button type="button" className="flex text-lg rounded-full" >
                                        <span className="text-black bg-white mt-[9px] font-medium " >Log In / SignUp</span>
                                        <img className="w-12 h-12 rounded-full ml-2 border-2" src={userlogo} alt="user photo" />
                                    </button>
                                </Link>
                            )
                            :
                            (
                                <>
                                    <button type="button" className="flex text-lg bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                        <img className="w-12 h-12 rounded-full" src={userlogo} alt="user photo" />
                                    </button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                        <div className="px-6 py-3">
                                            <span className="block ml-4 text-lg text-gray-900 dark:text-white">{useremail}</span>
                                        </div>
                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <button onClick={logout} className="block px-20 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log Out</button>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            )

                        }
                    </div>


                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium md:p-0 mt-4 p-2  bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-[20px]">
                            <li>
                                <Link to="/" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link to="/analytics" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Analytics</Link>
                            </li>
                            <li>
                                <Link to="/howtouse" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">How to Use</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Header