import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Linkbutton = () => {
    const {user, logOut} = UserAuth()

    const handleLogout = async () => {
        try {
         await logOut()
        } catch(error) {
         console.log(error)
        }
       }
     
  return (
    <>
      {user?.email ? 
        (<div className='absolute flex flex-col items-center justify-center space-y-10 top-20 right-1'>
            <div>
          <Link to='/home'>
            <button className='text-white pr-4'>Home</button>
          </Link>
            </div>
          
          <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          </div>
          <div>
          <Link to='/'>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
          </Link>
          </div>
        </div>
        )
      :
      (<div className='absolute flex flex-col items-center justify-center space-y-10 top-20 right-5'>
        <div className=''>
        <Link to='/'>
          <button className='text-white pr-4'>Sign In</button>
        </Link>
        </div>
        <div>
        <Link to='/signup'>
          <button className= 'bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
            Sign Up
          </button>
        </Link>
        </div>
      </div>)
        }
    </>
  )
}


export default Linkbutton