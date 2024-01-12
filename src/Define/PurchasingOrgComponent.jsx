import React from 'react'
import Form from '../Tools/Form'

const PurchasingOrgComponent = ({page}) => {
    const initialValues = {
        "Purchase Organization": '',
        "Descrition": '',
      };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default PurchasingOrgComponent