import React from 'react'
export default function CartDrawer({open, onClose, items, onRemove}){
  const total = items.reduce((s,i)=> s + (i.price||0), 0)
  if(!open) return null
  return (
    <div className='fixed inset-0 z-50'>
      <div className='absolute inset-0 bg-black/40' onClick={onClose}></div>
      <aside className='absolute right-0 top-0 h-full w-full max-w-md bg-white p-6'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Your Cart</h3>
          <button onClick={onClose} className='text-neutral-500'>Close</button>
        </div>
        <div className='mt-4 space-y-3'>
          {items.length===0 && <p className='text-sm text-neutral-500'>Cart is empty.</p>}
          {items.map((it, idx) => (
            <div key={idx} className='flex items-center gap-3 border rounded-lg p-2'>
              <img src={it.image} className='h-16 w-16 object-contain' />
              <div className='flex-1'>
                <div className='font-medium'>{it.name}</div>
                <div className='text-xs text-neutral-500'>₹{it.price}</div>
              </div>
              <button onClick={()=>onRemove(idx)} className='text-xs text-neutral-500 underline'>Remove</button>
            </div>
          ))}
        </div>
        <div className='mt-6 border-t pt-4'>
          <div className='flex items-center justify-between'><span>Total</span><span className='font-semibold'>₹{total}</span></div>
          <button className='mt-4 w-full rounded-lg bg-vestigeGreen px-4 py-3 text-white'>Checkout</button>
        </div>
      </aside>
    </div>
  )
}
