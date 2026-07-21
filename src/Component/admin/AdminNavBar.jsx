import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'
import { assets } from '../../assets/assets'

function AdminNavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Add Shows', path: '/admin/add-shows' },
    { name: 'List Shows', path: '/admin/list-shows' },
    { name: 'List Bookings', path: '/admin/list-bookings' },
  ]

  return (
    <div className='relative border-b border-gray-300/30'>
      <div className='flex items-center justify-between px-4 sm:px-6 md:px-10 h-14 sm:h-16'>
        <Link to="/">
          <img src={assets.logo} alt="logo" className='w-28 sm:w-32 md:w-36 h-auto' />
        </Link>

        {/* Desktop nav (optional, shows on md+) */}
        <div className='hidden md:flex items-center gap-6'>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className='text-sm font-medium'>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 -mr-2'
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <XIcon className='w-6 h-6' />
          ) : (
            <MenuIcon className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col gap-1 px-4 pb-4 border-t border-gray-300/30'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className='flex justify-center py-2 text-sm font-medium border-b border-gray-300/10 '
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminNavBar