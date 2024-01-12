import React from 'react'
import Form from '../Tools/Form'

const BusinessComponent = ({page}) => {
    const initialValues = {
      "Business Area": '',
      "Description": '',
      };
   
  return (


<>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default BusinessComponent