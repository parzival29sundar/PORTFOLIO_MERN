import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-3 px-10  sm:static'>
        <div className='flex flex-col items-center'>
             
        <div className='flex flex-col gap-5 sm:flex-row sm:mb-5 sm:gap-6'>
            <i class="ri-instagram-line text-gray-600 text-2xl">         
            </i>

          <a href='https://github.com/parzival29sundar' target='_blank' rel="noreferrer">
                <i class="ri-github-line text-gray-600 text-2xl"></i>        
          </a>

          <a href='https://utkarshsundar18poprock@gmail.com' target='_blank' rel="noreferrer">
                <i class="ri-mail-line text-gray-600 text-2xl"></i>
          </a>


           <a href='https://www.linkedin.com/in/utkarsh-sundar-14a06624b/' target='_blank' rel="noreferrer">
                <i class="ri-linkedin-box-line text-gray-600 text-2xl"></i>
           </a>

          <a href='https://twitter.com/parzival_293' target='_blank' rel="noreferrer">
            <i class="ri-twitter-x-line text-gray-600 text-2xl"></i>
          </a>
            
            
            
        </div>

        <div className='w-[2px] h-[25vh] bg-[#135d886c] mt-3 sm:hidden '>

        </div>
        </div>


    </div>
  )
}

export default LeftSider




