import React, { useEffect } from 'react'
import whyChoose from '../../assets/interactive design.jpg'
import whyChoose1 from '../../assets/Advance Interactivity.jpg'
import whyChoose2 from '../../assets/3D Graphs.jpg'
import insightImage from '../../assets/insightImage.jpg'
import hs1 from '../../assets/hs/hs1.png'
import hs2 from '../../assets/hs/hs2.png'
import hs3 from '../../assets/hs/hs3.png'
import hs4 from '../../assets/hs/hs4.png'
import hs5 from '../../assets/hs/hs5.png'
import hs6 from '../../assets/hs/hs6.png'
import hs7 from '../../assets/hs/hs7.png'
import hs8 from '../../assets/hs/hs8.png'
import hs9 from '../../assets/hs/hs9.png'

import './Content.css';
import aos from 'aos'
import 'aos/dist/aos.css'

function Content() {

  useEffect(() => {
    aos.init();
  }, [])

  return (
    <div className='ml-16 text-3xl '>

      <div className='mt-24 text-center'>
        <p className='font-bold text-8xl mt-4 text-indigo-700' data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in" data-aos-duration="600" > Data analytics is the future,</p>
        <p className='font-bold text-8xl mt-4 text-indigo-700' data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="500" > and the future is NOW!</p>
      </div>


      <h1 className='ml-[38rem] mt-24 font-bold text-4xl'>Why Choos Us </h1>

      <div className="flex p-4 animate-fade " data-aos="fade-up" data-aos-offset="100" data-aos-delay="600" >

        <div className="wrapper p-4 ml-[-3rem]" >
          <div className='why-choose-details border-2 rounded-lg h-[30rem]'>
            <div className="why-choose-image-div p-8 ">
              <img src={whyChoose} alt="why choose us" className='border-2 w-80 rounded-xl ml-6 h-[12rem]' />
            </div>
            <p className='p-2 text-center w-[27rem]'>
            We are providing very Easy <br /> Interface so user can easily  do they work and get their insights from our website.
            </p>
          </div>
        </div>

        <div className="wrapper p-4">
          <div className='why-choose-details border-2 rounded-lg h-[30rem]'>
            <div className="why-choose-image-div p-8  ">
              <img src={whyChoose1} alt="why choose us" className='border-2 rounded-xl ml-4 h-[12rem]' />
            </div>
            <p className='p-2 text-center w-[27rem]'>
              Enhancing user engagement through intuitive, responsive, and immersive interfaces for a seamless experience.
            </p>
          </div>
        </div>

        <div className="wrapper p-4">
          <div className='why-choose-details border-2 rounded-lg h-[30rem]'>
            <div className="why-choose-image-div p-8 ">
              <img src={whyChoose2} alt="why choose us" className='border-2 rounded-xl ml-2 h-[12rem]' />
            </div>
            <p className='p-2 text-center w-[27rem]'>
              We are also provide 3D Charts so user can get more Interactive Graphs for Visualization.
            </p>
          </div>
        </div>
      </div>


      <div className='container mt-24'>
        <h1 className='ml-[33rem] mt-24 font-bold text-4xl'> Get the Best Insights </h1>
        <div className='flex mt-12 ml-12' data-aos="fade-up" data-aos-offset="50" data-aos-delay="600">
          <div className='border-2 h-[28rem] bg-auto rounded-lg'>
            <img src={insightImage} alt="insight image" className='' />
          </div>
          <div className='ml-8 mt-6 mr-16'>
            <p>
              Get the best insights with our cutting-edge analytics tools designed to deliver accurate and actionable data. Our platform empowers you to make informed decisions, optimize performance, and drive growth with ease.
            </p>
            <br />
            <p>
              Stay ahead of the competition by leveraging real-time insights tailored to your needs.Whether you're a small business or a large enterprise, our intuitive tools ensure you get the best insights to drive growth and success.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className='horizontal-scroll'>
        <h1 className='ml-[37rem] mt-8 font-bold text-4xl'>Graph Demo's </h1> <br />
        <div className="ml-[-4rem] w-[94rem] h-72 overflow-hidden inline-flex flex-nowrap" data-aos="fade-up" data-aos-offset="50" data-aos-delay="600">
          <ul className=" flex items-center  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src={hs1} alt="Graph" />
            </li>
            <li>
              <img src={hs2} alt="Graph" />
            </li>
            <li>
              <img src={hs3} alt="Graph" />
            </li>
            <li>
              <img src={hs4} alt="Graph" />
            </li>
            <li>
              <img src={hs1} alt="Graph" />
            </li>
            <li>
              <img src={hs5} alt="Graph" />
            </li>
            <li>
              <img src={hs6} alt="Graph" />
            </li>
            <li>
              <img src={hs2} alt="Graph" />
            </li>
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            <li>
              <img src={hs7} alt="Graph" />
            </li>
            <li>
              <img src={hs3} alt="Graph" />
            </li>
            <li>
              <img src={hs8} alt="Graph" />
            </li>
            <li>
              <img src={hs4} alt="Graph" />
            </li>
            <li>
              <img src={hs9} alt="Graph" />
            </li>
            <li>
              <img src={hs5} alt="Graph" />
            </li>
            <li>
              <img src={hs1} alt="Graph" />
            </li>
            <li>
              <img src={hs6} alt="Graph" />
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Content