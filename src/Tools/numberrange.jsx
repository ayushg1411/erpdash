import React, { useState } from 'react';

const NumberRange = () => {
  const [tableRows, setTableRows] = useState([]);
  const [secondTableRows, setSecondTableRows] = useState([]);

  const addRow = () => {
    setTableRows((prevRows) => [
      ...prevRows,
      Array(6).fill(''),
    ]);
  };

  const saveData = () => {
    const updatedSecondTableRows = [...secondTableRows];

    // Transfer data from the first table to the second table
    tableRows.forEach((row) => {
      const newRow = row.map((cell, index) => (
        <td key={index}>
          {index === 5 ? (
            <input
              type="checkbox"
              checked={cell}
              readOnly
              className="border"
            />
          ) : (
            <input
              type="text"
              value={cell}
              readOnly
              className="border"
            />
          )}
        </td>
      ));

      updatedSecondTableRows.push(<tr key={updatedSecondTableRows.length}>{newRow}</tr>);
    });

    setSecondTableRows(updatedSecondTableRows);
    setTableRows([]);
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Number Range</h1>
      <div className="container mx-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">New Interval</th>
              <th className="border p-2">No</th>
              <th className="border p-2">From Number</th>
              <th className="border p-2">To Number</th>
              <th className="border p-2">Current Number</th>
              <th className="border p-2">Ext</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border p-2">
                    {cellIndex === 5 ? (
                      <input
                        type="checkbox"
                        checked={cell}
                        onChange={(e) => {
                          const updatedRows = [...tableRows];
                          updatedRows[rowIndex][cellIndex] = e.target.checked;
                          setTableRows(updatedRows);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => {
                          const updatedRows = [...tableRows];
                          updatedRows[rowIndex][cellIndex] = e.target.value;
                          setTableRows(updatedRows);
                        }}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex space-x-4 mt-4">
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
      </div>

      <div className="container mx-auto mt-4">
        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">New Interval</th>
              <th className="border p-2">No</th>
              <th className="border p-2">From Number</th>
              <th className="border p-2">To Number</th>
              <th className="border p-2">Current Number</th>
              <th className="border p-2">Ext</th>
            </tr>
          </thead>
          <tbody>{secondTableRows}</tbody>
        </table>
      </div>
    </section>
  );
};

export default NumberRange;
