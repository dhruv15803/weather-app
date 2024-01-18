import React from 'react'

const Loader = () => {
  return (
    <>
    <div className='flex gap-2 items-center'>
        <div className='border-2 border-blue-500 rounded-xl animate-spin h-8 w-8'></div>
        <p className='text-blue-500'>Loading ...</p>
    </div>
    </>
  )
}

export default Loader