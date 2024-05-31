import React from 'react'

function SectionTitle({
    title,
}) {
  return (
    <div className='flex gap-10 items-center py-10'>
        <h1 className='text-5xl sm:text-4xl text-secondary'>{title}</h1>
        <div className= 'w-60 ml-[-20px] h-[1px] bg-tertiary '></div>
    </div>
  )
}

export default SectionTitle