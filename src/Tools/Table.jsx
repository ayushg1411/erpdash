import React from 'react';

const Table = ({ jsonData }) => {
  if (!jsonData || jsonData.length === 0) {
    return <p>No data available.</p>;
  }

  // Assuming the keys in the first item of jsonData represent table headers
  const headers = Object.keys(jsonData[0]);

  return (
    <table className="  mt-2 table-auto w-8 border-collapse border border-green-800">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="border border-green-600 p-1">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {jsonData.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header} className="border border-green-600 p-1">{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
