import React from 'react'
import Form from '../Tools/Form'

const SalesOrgComponent = ({page}) => {
    const initialValues = {
        "SalesOrganization": '',
        "StatisticsCurrency": '',
        "AddressText": '',
        "RefSorg DocType": '',
        "LetterHeaderText": '',
        "CustomerIntercoBill": '',
        "FooterLinesText": '',
        "SalesOrgCalendar": '',
        "GreetingTextName": '',
        "TextSDSSender": '',
        "RebateProcActive": false,
      };
  return (
    <>
    <div className='flex'>
     
    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default SalesOrgComponent