import React from 'react'
import Form from '../Tools/Form'

const CompanyComponent = ({page}) => {
    const initialValues = {
        "Company": '',
        "CompanyName": '',
        "Street": '',
        "Pobox": '',
        "PostalCode": '',
        "City": '', // Updated to use a select box
        "SelectCountry": '',
        "Currency": 'inr',
      };
   
  return (
<>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default CompanyComponent