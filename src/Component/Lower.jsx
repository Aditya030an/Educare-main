import React from 'react'
import Goal from './Goal'
import Mission from './Mission'
import Vision from './Vision'


function Lower() {
  return (
    <div className='w-full relative min-h-[300vh] bg-gray-100'>
      <div className="container relative w-full">

        {/* Vision */}
        <div className="h-[100vh] relative z-10">
          <div className="sticky top-0 w-full h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
            Vision
          </div>
        </div>

        {/* Mission */}
        <div className="h-[100vh] relative z-20">
          <div className="sticky top-0 w-full h-screen bg-white flex items-center justify-center text-black text-4xl font-bold">
            Mission
          </div>
        </div>

        {/* Goal */}
        <div className="h-[100vh] relative z-30">
          <div className="sticky top-0 w-full h-screen bg-red-800 flex items-center justify-center text-white text-4xl font-bold">
            Goal
          </div>
        </div>

      </div>
    </div>
  );
}

export default Lower;
