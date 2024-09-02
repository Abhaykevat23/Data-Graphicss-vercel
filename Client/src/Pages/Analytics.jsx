import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import * as XLSX from 'xlsx'
import BarGraph from './BarGraph';
import barpng3d from '../../src/assets/Graph images/3d_bargraph.png'
import barpng from '../../src/assets/Graph images/BarGraph.png'
import Piepng3d from '../../src/assets/Graph images/3dPiegraph.png'
import Piepng from '../../src/assets/Graph images/pie chart.png'
import Doughnutpng from '../../src/assets/Graph images/doughnut.png'
import Linepng from '../../src/assets/Graph images/line.png'
import PieGraph from './PieGraph';
import ThreeDbarGraph from './ThreeDbarGraph';
import LineGraph from './LineGraph';
import DoughnutGraph from './DoughnutGraph';
import ThreeDpieGraph from './ThreeDpieGraph';

function Analytics() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login");
    }
  }, [])

  const [data, setData] = useState([]);

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const getdata = e.target.result;
      const workbook = XLSX.read(getdata, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  const [page, setPage] = useState("");

  return (
    <>
      <div className='mt-8'>
        <div className='flex'>
          <div className='flex-column'>
            <div className='ml-8 h-24 border-black w-[30rem] ' >
              <form>
                <label htmlFor="dropzone-file" className="mx-auto cursor-pointer flex w-full h-24 max-w-lg flex-col items-center rounded-xl border-4 border-dashed border-blue-800 bg-green-200 p-2 text-center" >
                  <FontAwesomeIcon icon={faUpload} style={{ color: "#2f90e4", fontSize: "3rem" }} />
                  <h2 className=" text-xl font-medium text-gray-700 tracking-wide">Upload Excel File</h2>
                  <input id="dropzone-file" type="file" accept='.xlsx,.xls' className="hidden" onChange={handleFile} />
                </label>
              </form>
            </div>
            <div className='ml-8 mt-6 h-[30.3rem] border-2 border-black w-[30rem]' >
              <button onClick={() => { setPage("Bar") }} >
                <img src={barpng} alt="Bar Graph" className='ml-16 p-2 mt-2 ' height={110} width={130} />
                <p className='ml-12 font-bold'>Bar Graph</p>
              </button>
              <button onClick={() => { setPage("Pie") }} >
                <img src={Piepng} alt="Pie Graph" className='ml-16 p-2 mt-2 ' height={110} width={130} />
                <p className='ml-12 font-bold'>Pie Graph</p>
              </button>

              <br />

              <button onClick={() => { setPage("Line") }} >
                <img src={Linepng} alt="Line Graph" className='ml-16 p-2 mt-2 ' height={110} width={130} />
                <p className='ml-12 font-bold'>Line Graph</p>
              </button>
              <button onClick={() => { setPage("Doughnut") }} >
                <img src={Doughnutpng} alt="Doughnut Graph" className='ml-16 p-2 mt-2 ' height={110} width={130} />
                <p className='ml-12 font-bold'>Doughnut Graph</p>
              </button>

              <br />

              <button onClick={() => { setPage("3DPie") }} >
                <img src={Piepng3d} alt="Pie 3d Graph" className='ml-16 p-2 mt-[-20px] ' height={110} width={130} />
                <p className='ml-12 font-bold'>3D Pie Graph</p>
              </button>
              <button onClick={() => { setPage("3DBar") }} >
                <img src={barpng3d} alt="3D Bar Graph" className='ml-16 p-2 mt-2 ' height={110} width={130} />
                <p className='ml-12 font-bold'>3D Bar Graph</p>
              </button>
            </div>
          </div>
          <div className='ml-8 h-[38rem] border-2 border-black w-[59rem] overflow-scroll' >
            {data.length > 0 && (
              <table className=' ml-8 mt-2'>
                <thead>
                  <tr>
                    {Object.keys(data[0]).map((key) => (
                      <th key={key} className='border-2 border-black p-2 w-42' >{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody >
                  {data.map((row, index) => (
                    <tr key={index} >
                      {Object.values(row).map((value, index) => (
                        <td key={index} className='border-2 border-gray p-2 w-42' >{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {page === "Bar" && <BarGraph data={data} />}
        {page === "Pie" && <PieGraph data={data} />}
        {page === "3DBar" && <ThreeDbarGraph data={data} />}
        {page === "Line" && <LineGraph data={data} />}
        {page === "Doughnut" && <DoughnutGraph data={data} />}
        {page === "3DPie" && <ThreeDpieGraph data={data} />}
        
      </div>
    </>
  )
}

export default Analytics