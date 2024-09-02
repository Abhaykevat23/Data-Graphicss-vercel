import React from 'react'
import { useState } from 'react'
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';
import Highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import HighchartsReact from 'highcharts-react-official'

highcharts3d(Highcharts)


function ThreeDbarGraph({ data }) {

    //color picker....
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
    const [color4, setColor4] = useState("");
    const [color5, setColor5] = useState("");
    // const [color6, setColor6] = useState("");


    const [col1label, setCol1label] = useState("");
    const column1labelText = (event) => {
        setCol1label(event.target.value);
    }
    const [col2, setCol2] = useState("");
    const column2Text = (event) => {
        setCol2(event.target.value);
    }
    const [col3, setCol3] = useState("");
    const column3Text = (event) => {
        setCol3(event.target.value);
    }
    const [col4, setCol4] = useState("");
    const column4Text = (event) => {
        setCol4(event.target.value);
    }
    const [col5, setCol5] = useState("");
    const column5Text = (event) => {
        setCol5(event.target.value);
    }

    const [col6, setCol6] = useState("");
    const column6Text = (event) => {
        // alert(value1);
        setCol6(event.target.value);
    }


    var label = data.map((row) => ([row[col1label]]));  // here i used state variable value
    var value1 = data.map((row) => ([row[col2]])); // here also same
    var value2 = data.map((row) => ([row[col3]]));
    var value3 = data.map((row) => ([row[col4]]));
    var value4 = data.map((row) => ([row[col5]]));
    var value5 = data.map((row) => ([row[col6]]));

    //download graph Code
    const handleCaptureClick = async () => {
        const pricingTableElmt =
            document.querySelector('.Graphbox');
        if (!pricingTableElmt) return alert("Error");

        const canvas = await html2canvas(pricingTableElmt);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, '3DBarGraph.png', 'image/png');
    };


    const barChartOptions = {
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 5,
                depth: 20,
                viewDistance: 20
            }
        },
        xAxis: {
            categories: label,
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        title: {
            text: '3D Bar Chart',
            align: 'left'
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                depth: 20
            }
        },
        colors: [color1, color2, color3, color4, color5],
        series: [
            {
                data: value1,
            },
            {
                data: value2,
            },
            {
                data: value3,
            },
            {
                data: value4,
            },
            {
                data: value5,
            },
        ]
    };


    return (
        <>
            <div className='flex ml-8 mt-8 h-[38rem] border-2 border-black w-[91rem]'>
                <div className='textboxes  ml-4 mt-4 h-[36rem] border-0 border-black w-[29rem] p-4'>
                    <h1 className='text-lg font-bold ml-2 mt-2' id='h1' >Write Column Names To Generate...</h1>

                    <input type="text" value={col1label} onChange={column1labelText} placeholder='Enter First Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />

                    <input type="text" value={col2} onChange={column2Text} placeholder='Enter Second Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color1} onChange={e => setColor1(e.target.value)} className='ml-2' />

                    <input type="text" value={col3} onChange={column3Text} placeholder='Enter third Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color2} onChange={e => setColor2(e.target.value)} className='ml-2' />

                    <input type="text" value={col4} onChange={column4Text} placeholder='Enter Fourth Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color3} onChange={e => setColor3(e.target.value)} className='ml-2' />

                    <input type="text" value={col5} onChange={column5Text} placeholder='Enter Fourth Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color4} onChange={e => setColor4(e.target.value)} className='ml-2' />

                    <input type="text" value={col6} onChange={column6Text} placeholder='Enter Fourth Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />
                    <input type="color" value={color5} onChange={e => setColor5(e.target.value)} className='ml-2' />

                    <div className='mt-8 h-16 w-86' >
                        <button onClick={handleCaptureClick} className='border-2 bg-green-400 font-bold hover:bg-green-500 border-black rounded mt-2 p-2 text-xl '>Download Graph</button>
                        <Link to={"/password"} >
                            <button className='border-2 bg-green-400 font-bold hover:bg-green-500 border-black rounded mt-2 ml-2 p-2 text-xl' >Share Graph</button>
                        </Link>
                    </div>
                </div>

                <div className='Graphbox  ml-4 mt-4 h-[36rem] border-0 border-black w-[61rem] p-4'>
                    <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
                </div>
            </div>
        </>
    )
}

export default ThreeDbarGraph