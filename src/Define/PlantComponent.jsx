import React from 'react'
import Form from '../Tools/Form'

const PlantComponent = ({page}) => {
    const initialValues = {
        "Plant": '',
        "Name1": '',
        "House Number": '',
        "Street": '',
        "PO Box": '',
        "Postal Code": '',
        "City": '',
        "State": '',
        "Factory Calender": '',
      };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default PlantComponent