// // PageComponent.jsx
// import React from 'react';

// const PageComponent = ({ page }) => {
//     console.log(page);
//   return (
//     <div className='bg-gray-300'>
//       <h1 className='text-4xl m-1'>{page.name}</h1>
//       <p  className='text-4xl m-1'>ID: {page._id}</p>
//       <p  className='text-4xl m-1'>TCode: {page.create}</p>
//       <p  className='text-4xl m-1'>Create :{
//         page.create==true? (<h1>yes</h1>): ( <h1>no</h1> )
//      }
//       </p>
//       {/* Add other relevant information */}
//     </div>
//   );
// };

// export default PageComponent;


// PageComponent.jsx
import React from 'react';
import CreditControlComponent from './Define/CreditControlComponent';
import CompanyComponent from './Define/CompanyComponent';
import ControlBar from './Tools/ControlBar';
import StorageComponent from './Define/StorageComponent';
import LocationComponent from './Define/LocationComponent';
import PlantComponent from './Define/PlantComponent';
import DivisionComponent from './Define/DivisionComponent';
import SalesOfficeComponent from './Define/SalesOfficeComponent';
import ShippingComponent from './Define/ShippingComponent';
import SalesOrgComponent from './Define/SalesOrgComponent';
import AssignComponent from './Assign/AssignComponent';
 
// Import other components as needed

const PageComponent = ({ page }) => {
  const renderPageContent = () => {
    switch (true) {
      case page.tcode >= 'GS10017' && page.tcode <= 'GS10034':
        return <AssignComponent page={page} />;

      case  page.name=='CREDIT CONTROL AREA':
        return <CreditControlComponent page={page} />;
     case page.name== 'COMPANY':
        return <CompanyComponent page={page} />;
    case page.name== 'STORAGE LOCATION':
            return <StorageComponent page={page} />;
           case page.name== 'LOADING_POINT':
              return <LocationComponent page={page} />;
             case page.name== 'PLANT':
              return <PlantComponent page={page} />;
             case page.name== 'DIVISION':
              return <DivisionComponent page={page} />;
             case page.name== 'SALES_0FFICE':
              return <SalesOfficeComponent page={page} />;
             case page.name== 'SHIPPING POINT':
              return <ShippingComponent page={page} />;
             case page.name== 'SALES ORGANIZATION':
              return <SalesOrgComponent page={page} />;
      default:
        return <div>No content found for {page.name}</div>;
    }
  };
  
  return (
    <div >
        <ControlBar controls={page} />
        {renderPageContent()}
    </div>
  );
};

export default PageComponent;
