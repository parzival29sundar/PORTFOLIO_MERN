import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
        <div className='flex gap-5 text-6xl font-semibold sm:text-4xl'>
            <h1 className='text-secondary u'>U</h1>
            <h1 className='text-tertiary s'>S</h1>
        </div>
    </div>
  )
}

export default Loader