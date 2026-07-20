import React from 'react'
import { Riple } from "react-loading-indicators";
function Loading() {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
        <Riple color="#F84565" size="medium" text="" textColor="" />
    </div>
  )
}

export default Loading
