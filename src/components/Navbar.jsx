import React, { useState } from 'react'
import Button from './Button'
import Linkbutton from './Linkbutton'


const Navbar = () => {
  const [isopen, setIsOpen] = useState(false)

  const toggleNavBar = () => {
    setIsOpen(!isopen)
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <div >
          <div className=''>
          <div  onClick={toggleNavBar}
          className='absolute md:hidden text-5xl flex-wrap text-red-700 right-14 top-6 cursor-pointer'>
          <ion-icon name={isopen ? 'close' : 'menu' }></ion-icon>
            </div>
            <div>
          {isopen && (
            <div className='md:hidden'>
              <Linkbutton />
            </div>
            )}
            </div>
          </div>
        </div>
        <div className='absolute right-5 top-6'>
        <div className='hidden md:flex'>
        <Button />
        </div>
        </div>
       
    </div>
  )
}

export default Navbar