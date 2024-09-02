import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [Credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();

    // useEffect(() => {
    //     const keyDownHandler = event => {
    //         if (event.key === 'Enter') {
    //             event.preventDefault();
    //             // Call submit function here
    //             handleSubmit();
    //         }
    //     };
    //     document.addEventListener('keydown', keyDownHandler);
    //     return () => {
    //         document.removeEventListener('keydown', keyDownHandler);
    //     };
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password } = Credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname: Credentials.firstname, lastname: Credentials.lastname, email: Credentials.email, password: Credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //Save Auth Token And Redirect User
            localStorage.setItem('token', json.authToken);
            navigate("/login");
            // props.showAlert("Account Created Successfully", "success");
        } else {
            // props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="Signup" >
                <div className="mb-32 flex mt-12 justify-center w-full dark:bg-gray-950">
                    <div className="w-[24rem] bg-white dark:bg-gray-900 shadow-lg rounded-lg px-8 py-6 ">
                        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">SignUp</h1>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-4">
                                <label htmlFor="fname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                                <input type="text" id="fname" name='firstname' value={Credentials.firstname} onChange={onChange} minLength={3} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Devin" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                                <input type="text" id="lname" name='lastname' value={Credentials.lastname} onChange={onChange} minLength={3} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Serry" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input type="email" id="email" name='email' value={Credentials.email} onChange={onChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                                <input type="password" id="password" name='password' value={Credentials.password} minLength={4} onChange={onChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Create your password" required />
                                {/* <button className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</button> */}
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    {/* <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked /> */}
                                    {/* <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300" >Remember me</label> */}
                                </div>
                                <Link to={'/login'}>
                                    <a className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Log In </a>
                                </Link>
                            </div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
                        </form>
                    </div>
                </div >
            </div>
        </>
    )
}

export default SignUp