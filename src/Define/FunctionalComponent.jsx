import React from 'react'
import Form from '../Tools/Form'

const FunctionalComponent = ({page}) => {
  const initialValues = {
    "Functional Area": '',
        "Name": '',
    
  };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default FunctionalComponent