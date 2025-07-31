import React from 'react'
import Goal from './Goal'
import Mission from './Mission'
import Vision from './Vision'
  function Lower() {
  return (
    <div className='w-[90vw] h-[90vh]  rounded-3xl overflow-hidden flex'>
      <div className="left  transition-all duration-300 object-contain hover:w-[50vw] w-[30vw] h-full">
        <Goal/>
      </div>
        <div className="center  border-l-4 border-r-4  border-white-500  transition-all duration-300 object-contain hover:w-[50vw] w-[30vw] h-full">
        <Mission/>
      </div>
      <div className="right transition-all duration-300 hover:w-[50vw] w-[30vw] h-full">
        <Vision/>
      </div>
    </div>
  )
}

export default Lower