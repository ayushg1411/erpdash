import React from 'react'
import Form from '../Tools/Form'

const CompanyCodeComponent = ({page}) => {
  const initialValues = {
        "Company": '',
        "CompanyName": '',
        "Street": '',
        "Pobox": '',
        "PostalCode": '',
        "City": '', // Updated to use a select box
        "SelectCountry": '',
        "Currency": 'inr',
        "Language":'',
    
  };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default CompanyCodeComponent