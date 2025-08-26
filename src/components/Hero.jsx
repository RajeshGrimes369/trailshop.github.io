import React from 'react'
export default function Hero(){
  return (
    <section className='bg-gradient-to-r from-softGreen to-white'>
      <div className='mx-auto max-w-7xl px-4 py-12 md:py-20 grid md:grid-cols-2 gap-6 items-center'>
        <div>
          <h1 className='text-3xl md:text-5xl font-extrabold'>World-class Health & Wellness Products</h1>
          <p className='mt-4 text-neutral-700 max-w-prose'>Natural supplements, nutrition and personal care curated for your wellbeing. Authentic Vestige products—verified & high quality.</p>
          <div className='mt-6'>
            <a href='#' className='rounded-lg bg-vestigeGreen px-5 py-3 text-white'>Shop Now</a>
          </div>
        </div>
        <div className='rounded-2xl overflow-hidden'>
          <img src='https://images.unsplash.com/photo-1547045662-3f0d8f7a9b6a?q=80&w=1200&auto=format&fit=crop' alt='wellness' className='w-full h-64 object-cover' />
        </div>
      </div>
    </section>
  )
}
