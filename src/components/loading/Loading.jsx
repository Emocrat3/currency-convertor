import React from 'react'

const Loading = () => {
  return (
    <div className='py-4 mb-4 m-5 h-full bg-white flex flex-col justify-center items-center sm:my-12 sm:flex-row sm:justify-evenly rounded-lg ring-1 ring-indigo-600'>
      <div
        className="text-indigo-600 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
      </div>
    </div>
  )
}

export default Loading