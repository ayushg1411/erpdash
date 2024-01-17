import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import '../Tools/print.css'; 

const DefineTable = ({ id, getId }) => {
  const [tableData, setTableData] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://sdaf-ijn7.onrender.com/api/user/define/${id}`);
        const data = await response.json();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSelectChange = (event, formId) => {
    getId(formId);
    setSelectedForm(formId);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportExcel = () => {
    const dataForExcel = tableData.map((item) => {
      const formData = item.form;
      const formId = item._id;
      const row = {
        Select: selectedForm === formId ? 'Selected' : '',
        ...formData,
      };
      return row;
    });

    const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'table_data.xlsx');
  };

  const renderTableHeader = () => {
    if (tableData.length === 0) return null;

    const header = Object.keys(tableData[0].form);
    return (
      <tr>
        <th className="bg-gray-200 p-2 border">Select</th>
        {header.map((key) => (
          <th key={key} className="bg-gray-200 p-2 border">
            {key}
          </th>
        ))}
      </tr>
    );
  };

  const renderTableRows = () => {
    return tableData.map((item, index) => {
      const formData = item.form;
      const formId = item._id;

      return (
        <tr key={index} className={selectedForm === formId ? 'bg-gray-300' : ''}>
          <td className="p-2 border">
            <label htmlFor={`checkbox-${index}`} className="cursor-pointer">
              {index}
            </label>
            <input
              id={`checkbox-${index}`}
              type="checkbox"
              onChange={(e) => handleSelectChange(e, formId)}
              checked={selectedForm === formId}
              className="mx-2 cursor-pointer"
            />
          </td>

          {Object.values(formData).map((value, index) => (
            <td key={index} className="p-2 border">
              {value}
            </td>
          ))}
        </tr>
      );
    });
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-8 overflow-x-auto overflow-y-auto">
      <button onClick={handlePrint} className="mr-4 bg-blue-500 rounded-md text-white px-4 mb-2 py-2">
        Print
      </button>
      <button onClick={handleExportExcel} className="bg-green-500 rounded-md text-white mb-2 px-4 py-2">
        Excel
      </button>
      <table className="w-full border-collapse border border-gray-800 print-table">
        {}
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default DefineTable;
