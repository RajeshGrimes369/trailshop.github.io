import React from 'react'
const Logo = ()=> <div className='h-10 w-10 rounded-full bg-vestigeGreen'></div>

export default function Navbar({openCart, cartCount}){
  return (
    <header className='sticky top-0 z-30 bg-white/80 backdrop-blur border-b'>
      <div className='mx-auto max-w-7xl px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Logo />
          <div>
            <div className='font-bold'>Vestige</div>
            <div className='text-xs text-neutral-500'>Health & Wellness</div>
          </div>
        </div>
        <nav className='hidden md:flex items-center gap-4 text-sm text-neutral-700'>
          <a href='#'>Home</a>
          <a href='#'>Products</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </nav>
        <div className='flex items-center gap-2'>
          <button onClick={openCart} className='relative rounded-lg bg-vestigeGreen px-3 py-2 text-white'>
            Cart
            {cartCount>0 && <span className='absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white text-xs font-semibold text-vestigeGreen ring-2 ring-white'>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  )
}
