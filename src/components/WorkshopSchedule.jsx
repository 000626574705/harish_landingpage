import React from 'react'

const WorkshopSchedule = () => {
  return (
    <div className='text-white text-xl md:text-2xl lg:text-2xl font-bold py-12 px-2 flex flex-col items-center justify-center gap-4 w-screen' style={{background: 'linear-gradient(115deg,#131847 0%,#154055 100%)'}}>
      <p className='text-center text-lg md:text-2xl lg:text-2xl'>
        Workshop is on <span style={{color: 'rgb(230, 155, 47)'}}>23rd November 2023 7 PM</span>
      </p>

      <p className='text-text_yellow text-center'>
      ***Be Quick! Last few spots for this batch are remaining!***
      </p>
    </div>
  )
}

export default WorkshopSchedule
