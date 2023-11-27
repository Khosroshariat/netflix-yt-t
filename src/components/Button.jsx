import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Button = () => {
    const {user, logOut} = UserAuth()


    const handleLogout = async () => {
        try {
         await logOut()
         // navigate('/login')
        } catch(error) {
         console.log(error)
        }
       }
     
  return (
    <>
    
      {user?.email ? 
        (<div>
          <Link to='/home'>
            <button className='text-white pr-4'>Home</button>
          </Link>
          <Link to='/'></Link>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <Link to='/'>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
          </Link>
        </div>)
      :
      (<div >
        <Link to='/'>
          <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className= 'bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
            Sign Up
          </button>
        </Link>
      </div>)
        }
    
    </>
  )
}

export default Button