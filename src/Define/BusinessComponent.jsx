// import React,{ useEffect} from 'react';
// import Form from '../Tools/Form';
// import { useState } from 'react';
// import {useDispatch, useSelector} from "react-redux"
// import { fetchBusiness } from "../Redux/Slices/BusinessSlice";
// import DefineTable from "../Tools/DefineTable";

// const renderButtons = (data, tcodes) => {
//   const dispatch=useDispatch();
//   const fetchapi =() =>{
 

//       dispatch(fetchBusiness());
    
//   }
//   return Object.entries(data).map(([key, value]) => {
//     if (typeof value === "boolean" && value) {
//       return (
//         <button
// className='button'
//           key={key}
          
//           onClick={fetchapi}
//         >
//         {key}
//         </button>
//       );
//     }
//     return null;
//   });
// };
// const ControlBar = ({ controls, getV }) => {
//   const [ vl, slv] = useState(null);

//   const dispatch=useDispatch();
//   const state= useSelector((state) =>state);
//   const [selectedFormItem, setSelectedFormItem] = useState(null);

//   const handleSelectChange = (event) => {
//     console.log(state.Business.data)
//     const index= event.target.value;
//     console.log(state.Business.data[index]._id);
//     const selectedIndex = event.target.value;
//     console.log(event.target.value);
//     setSelectedFormItem(state.Business.data[index]._id);
//     slv(selectedFormItem)
//     getV(state.Business.data[index]._id)
//   };


//   const renderedButtons = renderButtons(controls, controls.tcode);

//   return (
//     <div>
//       <div className="control-bar">
//         <p className="page-name">
//           {controls.name}
//           <span className="page-tcode">
//             {" "}
//             - {controls.tcode}
//           </span>
//         </p>
      

// {/* <button onClick={e=>dispatch(fetchCompanies())}>click</button> */}
//         <div className="button-container">{renderedButtons}</div>
//       </div>
//     </div>
//   );
// };





// const BusinessComponent = ({page}) => {
//   const [v, sv]= useState(null);
//   const [id, sid] = useState(null);
//   const state= useSelector((state)=>state)
//   const getV =(value)=>{
//     sv((v)=> value);
//   };
//   const getId = (value) => {
//     sid((id) => value);
//   };
//   const initialValues = {
//     "Business Area": '',
//     "Description": '',
//   };
   
//   return (
//     <div className="define-container">
//       <ControlBar getV={getV} controls={page} />
//       { (v)?<h1>{v}</h1>: null} 
//       {/* important comment */}
//       <Form initialValues={initialValues} id={page._id} />

//       <div className="mt-4">
//         <DefineTable id={page._id} getId={getId} />
//         { (id)?<h1>{id}</h1>: <h1>noid</h1>} 
//       </div>
//     </div>
//   );
// }

// export default BusinessComponent



// src/App.jsx
import React, { useState } from 'react';

function App() {
  const [firstTableData, setFirstTableData] = useState([]);
  const [secondTableData, setSecondTableData] = useState([]);

  const addRow = () => {
    setFirstTableData([...firstTableData, Array(5).fill('')]);
  };

  const saveData = () => {
    setSecondTableData([...secondTableData, ...firstTableData]);
    setFirstTableData([]);
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
          }

          h1 {
            text-align: center;
          }

          .container {
            margin: 20px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }

          button {
            margin: 10px;
            padding: 8px;
            cursor: pointer;
          }
        `}
      </style>

      <h1>Document Type Description</h1>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Document Type</th>
              <th>Doc.Type Description</th>
              <th>Interval No. Range</th>
              <th>External No. Range</th>
              <th>Field Selection Key</th>
            </tr>
          </thead>
          <tbody>
            {firstTableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => {
                        const updatedData = [...firstTableData];
                        updatedData[rowIndex][cellIndex] = e.target.value;
                        setFirstTableData(updatedData);
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <button
            onClick={addRow}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Row
          </button>
          <button
            onClick={saveData}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Save Data
          </button>
      </div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Document Type</th>
              <th>Doc.Type Description</th>
              <th>Interval No. Range</th>
              <th>External No. Range</th>
              <th>Field Selection Key</th>
            </tr>
          </thead>
          <tbody>
            {secondTableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
