import React from 'react'
import Form from '../Tools/Form'

const DivisionComponent = ({page}) => {
  const initialValues = {
    "Division": '',
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

export default DivisionComponent