import React, { useState } from 'react';

const TableComponent = () => {
  const tableData = [
    { fieldSelection: 'Field 1', description: 'Description 1' },
    { fieldSelection: 'Field 2', description: 'Description 2' },
    { fieldSelection: 'Field 3', description: 'Description 3' },
    { fieldSelection: 'Field 4', description: 'Description 4' },
    { fieldSelection: 'Field 5', description: 'Description 5' },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="table-component">
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
          }

          .table-component {
            margin: 20px;
            padding: 20px;
            background-color: #f7f7f7;
            border-radius: 8px;
          }

          h2 {
            color: #333;
          }

          table {
            width: 40%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
          }

          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 12px;
          }

          .modal {
            display: ${isModalOpen ? 'flex' : 'none'};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
          }

          .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            max-height: 600px;
            width :500px;
            overflow-y: auto;
          }

          .modal-content table {
            width: 100%;
            border-collapse: collapse;
            background-color: #fff;
            border-radius: 8px;
          }

          .modal-content th, .modal-content td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 12px;
          }

          button {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #2980b9;
          }
        `}
      </style>

      <h2>Table Heading</h2>

      <table>
        <thead>
          <tr>
            <th>Field Selection</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.fieldSelection}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={openModal}>
        Field Selection
      </button>

      <div className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>Field Selection Modal</h3>
          <table>
            <thead>
              <tr>
                <th>Field Selection</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Data Item</td>
              </tr>
              <tr>
                <td>Terms Of Delivery & Payment</td>
              </tr>
              <tr>
                <td>Refrence Data, Header</td>
              </tr>
              <tr>
                <td>Administrative Data,header</td>
              </tr>
              <tr>
                <td>Supplying Plant</td>
              </tr>
              <tr>
                <td>Quantity & Price</td>
              </tr>
              <tr>
                <td>Deadline Monitoring</td>
              </tr>
              <tr>
                <td>GR/IR Control</td>
              </tr>
              <tr>
                <td>Refrence Data,item</td>
              </tr>
              <tr>
                <td>Administrative Data,item</td>
              </tr>
              <tr>
                <td>Scheduling Control</td>
              </tr>
              <tr>
                <td>Administrative Data</td>
              </tr>
              <tr>
                <td>Delivering Monitoring</td>
              </tr>
              <tr>
                <td>Enjoy Fields</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
