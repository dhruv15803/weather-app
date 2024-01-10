import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className='flex  bg-blue-500  items-center p-2'>
        <div className='text-3xl text-white'>
            <Link to=''>Oras</Link>
        </div>
    </nav>
    </>
  )
}

export default Header