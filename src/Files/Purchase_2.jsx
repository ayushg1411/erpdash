// Import React and any necessary dependencies
import React, { useState } from 'react';


function YourComponentName() {
  const [selectAllReqd, setSelectAllReqd] = useState(false);
  const [selectAllOpt, setSelectAllOpt] = useState(false);
  const [selectAllDisplay, setSelectAllDisplay] = useState(false);

  const handleCheckAllReqd = () => {
    setSelectAllReqd(!selectAllReqd);
  };

  const handleCheckAllOpt = () => {
    setSelectAllOpt(!selectAllOpt);
  };

  const handleCheckAllDisplay = () => {
    setSelectAllDisplay(!selectAllDisplay);
  };

  const handleRowCheck = () => {
    // Implement the logic if needed when a row checkbox is checked/unchecked
  };

  return (
    <div className="YourComponentName">
       <style>{`
        /* YourComponentName.css */

        .YourComponentName {
          font-family: 'Arial', sans-serif;
          padding: 20px;
        }

        .form {
          margin-top: 20px;
        }

        .input-field {
          margin-bottom: 15px;
        }

        .datatable {
          width: 50%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .datatable th, .datatable td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        .datatable th {
          background-color: #f2f2f2;
        }

        .odd_col {
          background-color: #f9f9f9;
        }

        .even_col {
          background-color: #e6e6e6;
        }
      `}</style>
      {/* Include your styles and sidepanel component here */}
      <h1>Maintain Table T162: Fields for field Selection Group</h1>

     

      <div id="body">
        <table className="datatable">
          <thead>
            <tr>
              <th>Field Label</th>
              <th>
                Reqd.entry
                <input
                  id="check_all1"
                  type="checkbox"
                  checked={selectAllReqd}
                  onChange={handleCheckAllReqd}
                />
              </th>
              <th>
                Opt.entry
                <input
                  id="check_all2"
                  type="checkbox"
                  checked={selectAllOpt}
                  onChange={handleCheckAllOpt}
                />
              </th>
              <th>
                Display
                <input
                  id="check_all3"
                  type="checkbox"
                  checked={selectAllDisplay}
                  onChange={handleCheckAllDisplay}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd_col">
              <td>Plant</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="1"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="1"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="1"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="even_col">
              <td>Item category</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="2"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="2"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="2"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            {/* Add more rows as needed */}
            <tr className="odd_col">
              <td>Storage Location</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="3"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="3"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="3"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="even_col">
              <td>Account assignment category</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="4"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="4"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="4"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="odd_col">
              <td>Indicator: "Texts exist"</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="5"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="5"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="5"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="even_col">
              <td>Purchasing Group</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="6"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="6"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="6"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="odd_col">
              <td>Short text</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="7"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="7"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="7"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="even_col">
              <td>Material Group</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="8"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="8"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="8"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="odd_col">
              <td>Material description</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="9"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="9"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="9"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="even_col">
              <td>External service fields</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="10"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="10"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="10"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="odd_col">
              <td>Value limit fields</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="11"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="11"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="11"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="even_col">
              <td>Manufacturer part number</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="12"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="12"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="12"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
            <tr className="odd_col">
              <td>Requirement Urgency</td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="13"
                  className="Reqdentry-checkbox"
                  checked={selectAllReqd}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="13"
                  className="Optentry-checkbox"
                  checked={selectAllOpt}
                  onChange={handleRowCheck}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="row-check"
                  value="13"
                  className="Display-checkbox"
                  checked={selectAllDisplay}
                  onChange={handleRowCheck}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Include your script tag here */}
    </div>
  );
}

export default YourComponentName;
