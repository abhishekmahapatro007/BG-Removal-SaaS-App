import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()

  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()

  return (
    <div className='flex items-center justify-between mx-4 p-3 lg:mx-44'>
      <img className='w-32 sm:w-44 cursor-pointer'
        onClick={() => navigate('/')}
        src={assets.logo} alt=""
      />
      {
        isSignedIn ?
          <div>
            <UserButton/>
          </div>
          :
          <button onClick={() => openSignIn({})}
            className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
            Get started
            <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
          </button>
      }

    </div>
  )
}

export default Navbar
