'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed w-full top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center'>
              <span className='font-bold text-sm'>TH</span>
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              tokens.hub
            </span>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            <a href='#vision' className='hover:text-purple-400 transition'>
              Vision
            </a>
            <a href='#use-cases' className='hover:text-purple-400 transition'>
              Use Cases
            </a>
            <a href='#value' className='hover:text-purple-400 transition'>
              Value
            </a>
            <a href='#contact' className='hover:text-purple-400 transition'>
              Contact
            </a>
          </nav>

          <div className='flex items-center space-x-4'>
            <div className='hidden md:flex items-center space-x-2 text-sm'>
              <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
              <span className='text-gray-400'>Premium Domain • For Sale</span>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4'>
            <div className='flex flex-col space-y-4'>
              <a
                href='#vision'
                className='py-2 hover:text-purple-400 transition'
              >
                Vision
              </a>
              <a
                href='#use-cases'
                className='py-2 hover:text-purple-400 transition'
              >
                Use Cases
              </a>
              <a
                href='#value'
                className='py-2 hover:text-purple-400 transition'
              >
                Value
              </a>
              <a
                href='#contact'
                className='py-2 hover:text-purple-400 transition'
              >
                Contact
              </a>
              <div className='pt-4 border-t border-gray-800'>
                <span className='text-sm text-gray-400'>
                  Premium Domain • For Sale
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
