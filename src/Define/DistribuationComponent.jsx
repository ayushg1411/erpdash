import React from 'react'
import Form from '../Tools/Form'

const DistribuationComponent = ({page}) => {
  const initialValues = {
    "Distribuation": '',
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

export default DistribuationComponent