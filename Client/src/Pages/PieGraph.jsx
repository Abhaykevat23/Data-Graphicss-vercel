import React from 'react'
import { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function PieGraph({ data }) {

    //color picker....
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
    const [color4, setColor4] = useState("");
    const [color5, setColor5] = useState("");

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

    var label = data.map((row) => ([row[col1label]]));
    var value = data.map((row) => ([row[col2]]));

    let flag = 0;
    for (let i = 0; i < data.length; i++) {
        flag += data[0][col2];
    }

    var obj = label.reduce(function (a, b, i) {
        if (!a.hasOwnProperty(b)) {
            a[b] = 0;
        }
        a[b] += Number(value[i]);
        return a;
    }, {});

    var lab = Object.keys(obj);
    var val = Object.values(obj);

    //download graph Code
    const handleCaptureClick = async () => {
        const pricingTableElmt = document.querySelector('.Piechart');
        if (!pricingTableElmt) return alert("Error");
        const canvas = await html2canvas(pricingTableElmt);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'Piechart.png', 'image/png');
    };

    // Custom Tooltip 
    // const footer = () => {
    //     let percentage = 0;
    //     lab.forEach(function () {
    //         percentage = (val / flag) * 100;
    //     });
    //     return 'Percentage : ' + percentage;
    // };

    return (
        <>
            <div className='flex ml-8 mt-8 h-[39rem] border-2 border-black w-[91rem]'>
                <div className='textboxes  ml-4 mt-4 h-[36rem] border-0 border-black w-[29rem] p-4'>
                    <h1 className='text-lg font-bold ml-2 mt-2' id='h1' >Write Column Names To Generate...</h1>

                    <input type="text" value={col1label} onChange={column1labelText} placeholder='Enter Lable Column name' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />

                    <input type="text" value={col2} onChange={column2Text} placeholder='Enter Data Column' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />

                    <input type="text" value={col3} onChange={column3Text} placeholder='Enter Color Column' className='text-xl font-bold border-2 border-blue-600 w-60 p-3 mt-2 w-80' />


                    <div className='mt-8 h-16 w-86' >
                        <button onClick={handleCaptureClick} className='border-2 bg-green-400 font-bold hover:bg-green-500 border-black rounded mt-2 p-2 text-xl '>Download Graph</button>
                        <Link to={"/password"} >
                            <button className='border-2 bg-green-400 font-bold hover:bg-green-500 border-black rounded mt-2 ml-2 p-2 text-xl' >Share Graph</button>
                        </Link>
                    </div>
                </div>

                <div className='Graphbox  ml-4 mt-4 h-[36rem] border-0 border-black w-[61rem] p-4 mb-2'>
                    <div >
                        <Pie className='Piechart h-[35rem] w-[60rem] border-2 border-black '
                            data={{
                                labels: lab,
                                datasets: [
                                    {
                                        data: val,
                                        backgroundColor: "lightgreen",
                                    }
                                ],
                            }}
                            options={{
                                plugins: {
                                    title: {
                                        text: "Pie Chart",
                                    },
                                    // tooltip: {
                                    //     callbacks: {
                                    //         footer : footer,
                                    //     }
                                    // },
                                },
                                animation: {
                                    duration: 1000,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

export default PieGraph