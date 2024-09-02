import React, { useEffect } from 'react'
import g1 from "../../assets/g1.png"
import g2 from "../../assets/g2.png"
import g3 from "../../assets/g3.png"
import './Landing.css'
import Content from './Content'
import { Link } from 'react-router-dom'
import aos from 'aos'
import 'aos/dist/aos.css'

function Landing() {

    useEffect(() => {
        aos.init();
    }, [])

    return (
        <>
            <div className='container p-9'>
                <div className='p-16' id='f-image' >
                    <div className='flex' >
                        <img id='transform-img1' src={g1} className='square1 h-72 w-[29rem] ml-40 ' />
                        <img id='transform-img2' src={g2} className='square2 h-72 w-[29rem] ml-24' />
                    </div>
                    <img id='transform-img3' src={g3} className='h-72 w-[29rem] ml-[430px] mb-32' />
                </div>
            </div>
            <Link to={'/analytics'}>
                <button className='p-4 w-48  ml-[42rem] rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white text-2xl font-bold '>Get Started</button>
            </Link>
            <Content />
        </>
    )
}

export default Landing