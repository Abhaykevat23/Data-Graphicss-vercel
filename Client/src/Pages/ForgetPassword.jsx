import React, { useState } from 'react'

// 
// [[[[[[[[[[[[[[[[  It is Send Mail file.......  ]]]]]]]]]]]]]]] 
// 


function ForgetPassword() {
    const [email, setEmail] = useState("");
    const subject="Data Graph Data Graphicss";
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");

    const baseUrl="http://127.0.0.1:5000";
    
    const sendMail = async () => {
        setAttachment(attachment.toString().replace(/^.*(\\|\/|\:)/, ''));
        let dataSend = {
            email:email,
            subject : subject,
            message : message,
            attachment:attachment,
        };

        const res=await fetch(`${baseUrl}/email/sendEmail`,{
            method:"POST",
            body: JSON.stringify(dataSend),
            headers:{
                Accept:"application/json",
                "Content-Type" :"application/json"
            },
        });
        const json = await res.json();
        if(json){
            alert(json.message);
        }
        
    }
    return (
        <>
            <div className="email">
                <div className="mb-32 flex mt-28 justify-center w-full dark:bg-gray-950">
                    <div className="bg-white dark:bg-gray-900 w-96 h-66 shadow-lg rounded-lg px-8 py-6 ">
                        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Share Graph To Self</h1>
                        <form >
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>

                                <input type="email" id="email" name='email' onChange={(e) => setEmail(e.target.value)} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@gmail.com" required />
                                
                                <input type="text" id="text" name='message' onChange={(e) => setMessage(e.target.value)} className="shadow-sm rounded-md w-full px-3 py-2 mt-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Message (Optional)" />

                                <input type="file" id="file" name='attachment' onChange={(e) => setAttachment(e.target.value)} className="shadow-sm rounded-md w-full px-3 py-2 mt-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                <br />
                                <span className=' text-red-700 '> * Select from downloads folder</span>

                            </div>
                            <button type="button" onClick={()=>sendMail()} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send via G-Mail</button>
                        </form>
                    </div>
                </div >

            </div>
        </>
    )
}

export default ForgetPassword