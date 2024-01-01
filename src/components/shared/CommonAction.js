import React from 'react'

const CommonAction = ({title,subTitle}) => {
  return (
    <div className='common-image h-[450px] w-full'>

        <div className='flex flex-col gap-3 justify-center items-center h-[450px]'>

            <h1 className='text-white text-[50px] font-bold leading-6'>{title}</h1>
            <p className='text-white text-[20px] leading-8 font-medium'>{subTitle}</p>
             

        </div>
        
    </div>
  )
}

export default CommonAction