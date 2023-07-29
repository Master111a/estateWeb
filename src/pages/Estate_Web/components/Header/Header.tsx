import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../../assets/img/logo.svg'

export default function Header() {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} />
        </Link>
        <div className='flex items-center gap-6'>
          <Link
            to={''}
            className='bg-slate-300 text-gray-800 px-4 py-3 rounded-lg hover:text-gray-50 hover:bg-slate-400 transition'
          >
            Log in
          </Link>
          <Link to={''} className='bg-violet-700 text-white hover:bg-violet-800 px-4 py-3 rounded-lg transition'>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
