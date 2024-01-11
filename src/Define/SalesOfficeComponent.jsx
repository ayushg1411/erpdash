import React from 'react'
import Form from '../Tools/Form'

const SalesOfficeComponent = ({page}) => {
  const initialValues = {
    "Sales": '',
    "Postal Code": '',
    "Created By": '',
    "Description": '', // Corrected field name to match initialValues
  };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues}  />
    </>
  )
}

export default SalesOfficeComponent