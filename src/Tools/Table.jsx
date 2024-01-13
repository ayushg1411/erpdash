import React from 'react';

const Table = ({ jsonData }) => {
  if (!jsonData || jsonData.length === 0) {
    return null
  }

  // Assuming the keys in the first item of jsonData represent table headers
  const headers = Object.keys(jsonData[0]);

  return (
    <div className='bg-gray-200 p-4 '>
      <table className="table-auto w-64 border-collapse border border-gray-500  rounded-xl ">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="border border-gray-600 p-1">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {jsonData.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header} className="border border-gray-600 p-1">{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
  