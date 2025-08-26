import React from 'react'
export default function ProductCard({product, onAdd}){
  return (
    <div className='rounded-xl border bg-white p-4 flex flex-col'>
      <img src={product.image} alt={product.name} className='h-44 w-full object-contain mb-4' />
      <h3 className='font-semibold'>{product.name}</h3>
      <p className='text-sm text-neutral-500 mb-2'>{product.short}</p>
      <div className='mt-auto flex items-center justify-between'>
        <div>
          <div className='text-lg font-semibold'>₹{product.price}</div>
          <div className='text-xs text-neutral-400'>MRP</div>
        </div>
        <button onClick={onAdd} className='rounded-lg bg-vestigeGreen px-4 py-2 text-white'>Add</button>
      </div>
    </div>
  )
}
