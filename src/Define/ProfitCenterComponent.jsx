import React from 'react'
import Form from '../Tools/Form'

const ProfitCenterComponent = ({page}) => {
    const initialValues = {
        "Profit Center": '',
        "Profit Center1": '', //Coy From heading
        "Controlling Area": '',
      };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default ProfitCenterComponent