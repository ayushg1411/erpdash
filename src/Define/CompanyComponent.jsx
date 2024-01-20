// import React,{ useEffect} from 'react';
// import Form from '../Tools/Form';
// import { useState } from 'react';
// import {useDispatch, useSelector} from "react-redux"
// import { fetchCompanies } from '../Redux/Slices/companySlice';
// import DefineTable from "../Tools/DefineTable";

// const renderButtons = (data, tcodes) => {
//   const dispatch=useDispatch();
//   const fetchapi =() =>{
 

//       dispatch(fetchCompanies());
    
//   }
//   return Object.entries(data).map(([key, value]) => {
//     if (typeof value === "boolean" && value) {
//       return (
//         <button
//           className="button"
//           key={key}
          
//           onClick={fetchapi}
//         >
//           <p className="p-1"> {key}</p>
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
//     console.log(state.company.data)
//     const index= event.target.value;
//     console.log(state.company.data[index]._id);
//     const selectedIndex = event.target.value;
//     console.log(event.target.value);
//     setSelectedFormItem(state.company.data[index]._id);
//     slv(selectedFormItem)
//     getV(state.company.data[index]._id)
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





// const CompnayComponent = ({page}) => {
//   const user = JSON.parse(localStorage.getItem("currentUser"))
//   console.log("user", user);
//   console.log("user")
//   const [v, sv]= useState(null);
//   const [id, sid] = useState(null);
//   const state= useSelector((state)=>state)
//   const getV =(value)=>{
//     sv((v)=> value);
//   }
//   const getId = (value) => {
//     sid((id) => value);
//   };
//   const initialValues = {
//     "Company": "",
//     "Company Name": "",
//     "Street": "",
//    " PO Box": "",
//     "Postal Code": "",
//     "City": "", 
//     "Select Country": "",
//     "Currency": "inr",
//   };
   
//   return (
// <div className='define-container'>
// <ControlBar getV={getV} controls={page} /> 
//    { (v)?<h1>{v}</h1>: null}
//     <Form initialValues={initialValues} id={page._id} />

//     <div className="mt-4">
//         <DefineTable id={page._id} getId={getId} />
//         { (id)?<h1>{id}</h1>: <h1>noid</h1>} 
//       </div>
//     </div>
//   )
// }

// export default CompnayComponent




// import React, { useState } from 'react';

// const NumberRange = () => {
//   const [tableRows, setTableRows] = useState([]);
//   const [secondTableRows, setSecondTableRows] = useState([]);

//   const addRow = () => {
//     setTableRows((prevRows) => [
//       ...prevRows,
//       Array(6).fill(''),
//     ]);
//   };

//   const saveData = () => {
//     const updatedSecondTableRows = [...secondTableRows];

//     // Transfer data from the first table to the second table
//     tableRows.forEach((row) => {
//       const newRow = row.map((cell, index) => (
//         <td key={index}>
//           {index === 5 ? (
//             <input
//               type="checkbox"
//               checked={cell}
//               readOnly
//               className="border"
//             />
//           ) : (
//             <input
//               type="text"
//               value={cell}
//               readOnly
//               className="border"
//             />
//           )}
//         </td>
//       ));

//       updatedSecondTableRows.push(<tr key={updatedSecondTableRows.length}>{newRow}</tr>);
//     });

//     setSecondTableRows(updatedSecondTableRows);
//     setTableRows([]);
//   };

//   return (
//     <section>
//       <h1 className="text-2xl font-semibold mb-4">Number Range</h1>
//       <div className="container mx-auto">
//         <table className="w-full border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border p-2">New Interval</th>
//               <th className="border p-2">No</th>
//               <th className="border p-2">From Number</th>
//               <th className="border p-2">To Number</th>
//               <th className="border p-2">Current Number</th>
//               <th className="border p-2">Ext</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableRows.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((cell, cellIndex) => (
//                   <td key={cellIndex} className="border p-2">
//                     {cellIndex === 5 ? (
//                       <input
//                         type="checkbox"
//                         checked={cell}
//                         onChange={(e) => {
//                           const updatedRows = [...tableRows];
//                           updatedRows[rowIndex][cellIndex] = e.target.checked;
//                           setTableRows(updatedRows);
//                         }}
//                       />
//                     ) : (
//                       <input
//                         type="text"
//                         value={cell}
//                         onChange={(e) => {
//                           const updatedRows = [...tableRows];
//                           updatedRows[rowIndex][cellIndex] = e.target.value;
//                           setTableRows(updatedRows);
//                         }}
//                       />
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="flex space-x-4 mt-4">
//           <button
//             onClick={addRow}
//             className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
//           >
//             Add Row
//           </button>
//           <button
//             onClick={saveData}
//             className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
//           >
//             Save Data
//           </button>
//         </div>
//       </div>

//       <div className="container mx-auto mt-4">
//         <table className="w-full border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border p-2">New Interval</th>
//               <th className="border p-2">No</th>
//               <th className="border p-2">From Number</th>
//               <th className="border p-2">To Number</th>
//               <th className="border p-2">Current Number</th>
//               <th className="border p-2">Ext</th>
//             </tr>
//           </thead>
//           <tbody>{secondTableRows}</tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default NumberRange;
