import React from 'react'
export default function Footer(){
  return (
    <footer className='border-t mt-12'>
      <div className='mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div>© {new Date().getFullYear()} Vestige Store — Authentic health & wellness</div>
          <div className='mt-3 md:mt-0'>Made with care</div>
        </div>
      </div>
    </footer>
  )
}
