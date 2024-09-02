import React from 'react'
import { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
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

//=======================================================================
//give check box for combine same rows for large data . 
//=======================================================================

function BarGraph({ data }) {

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
    setCol6(event.target.value);
  }


  var label = data.map((row) => ([row[col1label]]));
  let value1 = data.map((row) => ([row[col2]]));
  let value2 = data.map((row) => ([row[col3]]));
  let value3 = data.map((row) => ([row[col4]]));
  let value4 = data.map((row) => ([row[col5]]));
  let value5 = data.map((row) => ([row[col6]]));

  //download graph Code
  const handleCaptureClick = async () => {
    const pricingTableElmt =
      document.querySelector('.BarGraph');
    if (!pricingTableElmt) return alert("Error");

    const canvas = await html2canvas(pricingTableElmt);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'BarGraph.png', 'image/png');
  };

  let value = data.map((row) => ([row[col2]]));

  var obj = label.reduce(function (a, b, i) {
    if (!a.hasOwnProperty(b)) {
      a[b] = 0;
    }
    a[b] += Number(value[i]);
    return a;
  }, {});

  var lab = Object.keys(obj);
  var val = Object.values(obj);

  // Checkbox Code
  const [checked, setChecked] = useState("unchecked")
  const checkbox = () => {
    if (checked == "unchecked") {
      setChecked("checked")
    }
    else {
      setChecked("unchecked")
    }
  }

  return (
    <>
      <div className='flex ml-8 mt-8 h-[40rem] border-2 border-black w-[91rem]'>
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
          <br />
          <span >
            <input type='checkbox' className='mt-2 w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2' onChange={checkbox} />
            <span className='text-xl font-bold'>
              Tick This For Large Dataset

            </span>
          </span>

          <div className='mt-6 h-16 w-86' >
            <button onClick={handleCaptureClick} className='border-2 bg-green-400 font-bold hover:bg-green-500 border-black rounded mt-2 p-2 text-xl '>Download Graph</button>
            <Link to={"/password"} >
              <button className='border-2 bg-green-400 font-bold hover:bg-green-500 border-black rounded mt-2 ml-2 p-2 text-xl' onClick={handleCaptureClick} >Share Graph</button>
            </Link>
          </div>
        </div>

        <div className='Graphbox  ml-4 mt-4 h-[36rem] border-0 border-black w-[61rem] p-4'>
          <div >
            {
              (checked == "unchecked") ?
                (<>
                  <Bar className='BarGraph h-[35rem] w-[60rem]'
                    data={{
                      labels: label,
                      datasets: [{
                        label: col2,
                        data: value1,
                        backgroundColor: color1,
                        // backgroundColor: "#72CFC0",
                        borderRadius: 5
                      },
                      {
                        label: col3,
                        data: value2,
                        backgroundColor: color2,
                        // backgroundColor: "#FF6FFD",
                        borderRadius: 5
                      },
                      {
                        label: col4,
                        data: value3,
                        backgroundColor: color3,
                        // backgroundColor: "#FFAB05",
                        borderRadius: 5
                      },
                      {
                        label: col5,
                        data: value4,
                        backgroundColor: color4,
                        // backgroundColor: "#C8ED11",
                        borderRadius: 5
                      },
                      {
                        label: col6,
                        data: value5,
                        backgroundColor: color5,
                        // backgroundColor: "#C8ED11",
                        borderRadius: 5
                      }
                      ],
                    }}
                    options={{
                      plugins: {
                        title: {
                          text: "Bar Chart",
                        },
                      },
                      animation: {
                        duration: 1000,
                      },
                    }}
                  />
                </>)
                :
                (<>
                  <Bar className='BarGraph h-[35rem] w-[60rem]'
                    data={{
                      labels: lab,
                      datasets: [{
                        label: col2,
                        data: val,
                        backgroundColor: color1,
                        borderRadius: 5
                      },
                      {
                        label: col3,
                        data: value2,
                        backgroundColor: color2,
                        borderRadius: 5
                      },

                      ],
                    }}
                    options={{
                      plugins: {
                        title: {
                          text: "Combined Bar Chart",
                        },
                      },
                      animation: {
                        duration: 1000,
                      },
                    }}
                  />
                </>)
            }

          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default BarGraph