import React from 'react'
import Form from '../Tools/Form'
import { useSelector, useDispatch } from 'react-redux';
import ControlBar from '../Tools/ControlBar';
import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";


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
    <ControlBar controls={page} dispatcher={fetchsalesOrg()}  />

    
    </div>
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default SalesOrgComponent