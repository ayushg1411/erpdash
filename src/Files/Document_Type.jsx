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
