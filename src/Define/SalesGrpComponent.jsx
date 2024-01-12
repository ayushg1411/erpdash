import React from 'react'
import Form from '../Tools/Form'

const SalesGrpComponent = ({page}) => {
    const initialValues = {
        "Sales Group": '',
        "Description": '', // Corrected field name to match initialValues
      };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default SalesGrpComponent