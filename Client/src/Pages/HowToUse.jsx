import React from 'react'
import insightImage from '../assets/insightImage.jpg';
import BarGraphImg from '../assets/Bar.jpg';
import PieGraphImg from '../assets/Doughnut.jpg';
import LineGraphImg from '../assets/Line.jpg';


function HowToUse() {
  return (
    <>
      <div className='container mt-10 text-3xl p-6'>
        <h1 className='ml-[38rem] mt-2 font-bold text-4xl'>How To Use Tools</h1>
        
        <br />
        <br />

        <div className='flex mt-12 ml-12'>
          <div className='border-2 h-[20rem] bg-auto rounded-xl'>
            <img src={BarGraphImg} alt="insight image" className='h-[25rem] w-[90rem] rounded-xl' />
          </div>
          <div className='ml-8 mt-0 mr-6'>
            <h1 className='ml-[19rem] mt-2 font-bold text-4xl'> Bar Graph </h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To use a bar graph, label the axes with your categories and values. Plot bars for each category corresponding to its value. Ensure bars are evenly spaced and clearly labeled. Use different colors or patterns for clarity. Analyze by comparing bar heights to identify trends and differences.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use consistent spacing and colors for clarity. Bar graphs are ideal for comparing different groups or tracking changes over time.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className='flex mt-12 ml-12'>
          <div className='ml-8 mt-0 mr-6'>
            <h1 className='ml-[19rem] mt-2 font-bold text-4xl'> Pie Graph </h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To use a pie graph, start by collecting data and calculating the total sum of all values. Convert each individual value into a percentage of the total. Draw a circle and divide it into slices where each slice represents a percentage of the whole, corresponding to the data values.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Label each slice clearly, either within the slice or with a legend, ensuring each section is distinct with varying colors or patterns.
            </p>
          </div>
          <div className='border-2 h-[20rem] bg-auto rounded-xl'>
            <img src={PieGraphImg} alt="insight image" className='h-[25rem] w-[75rem] rounded-xl' />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className='flex mt-12 ml-12'>
          <div className='border-2 h-[20rem] bg-auto rounded-xl'>
            <img src={LineGraphImg} alt="insight image" className='h-[25rem] w-[75rem] rounded-xl' />
          </div>
          <div className='ml-8 mt-0 mr-6'>
            <h1 className='ml-[19rem] mt-2 font-bold text-4xl'> Line Graph </h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To use a line graph, begin by labeling the x-axis (horizontal) and y-axis (vertical) with the relevant variables. The x-axis typically represents time or sequential data, while the y-axis shows the measured values. Plot data points on the graph where the x and y values intersect. 
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connect these points with lines to illustrate trends over time or changes across categories. Ensure each line is distinguishable if multiple data sets are included, using different colors or styles.
            </p>
          </div>
        </div>

        <br />
        <br />
      </div>
      <br />


    </>
  )
}

export default HowToUse