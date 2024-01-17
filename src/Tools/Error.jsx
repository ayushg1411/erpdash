import React from 'react'

function Error({message, onClicks}) {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
               {message} 
               <button className="text-blue-500 underline" onClick ={()=>onClicks()}>
              Try Again
            </button>
                
            </div>
        </div>
    )

}

export default Error;