import React from 'react'
import Form from '../Tools/Form'

const ShippingComponent = ({page}) => {
    const initialValues = {
        "Shipping Point": '',
        "Country": '',
        "Departure Zone": '',
        "Factory Calender": '',
        "Working Times": '',
        "cal Load Time": '',
        "Det ick/Pack Time": '',
        "Rounding Work Days": '',
        "Address Text Name": '',
        "Letter Header Text": '',
        "Text Name Foot Lines": '',
        "Text Name Greeting": '',
        "Txt_NM SDB Sender": '',
        "Output Type": '',
        "Message Language": '',
        "No of Messages": '',
        "Send Time": '',
        "Transmission Medium": '',
        "Subsystem": '',
        "Display Info": '',
        "Pick Confirmation": '',
      };

  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default ShippingComponent