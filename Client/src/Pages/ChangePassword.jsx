import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const [Credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = Credentials;
        const response = await fetch("http://localhost:5000/api/auth/changepassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: Credentials.email, password: Credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            navigate("/login");
            alert("Password Changed ...");
        } else {
            alert("Enter Correct Email ...");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        const keyDownHandler = async (event) => {

            if (event.key === 'Enter') {
                event.preventDefault();
                // Call submit function here
                await handleSubmit();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <>
            <div className="Signup" >
                <div className="mb-32 flex mt-12 justify-center w-full dark:bg-gray-950">
                    <div className="bg-white w-96 dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 ">
                        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Change Password</h1>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input type="email" id="email" name='email' value={Credentials.email} onChange={onChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                                <input type="password" id="password" name='password' value={Credentials.password} minLength={4} onChange={onChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Create your password" required />
                            </div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Password</button>
                        </form>
                    </div>
                </div >
            </div>
        </>
    )
}

export default ChangePassword