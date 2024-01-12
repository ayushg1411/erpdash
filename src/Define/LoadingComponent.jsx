import React from 'react'
import Form from '../Tools/Form'

const LoadingComponent = ({page}) => {
    const initialValues = {
      "Loading Point": '',
      "Responsibility": '',
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

export default LoadingComponent