import React, { useState } from 'react'
import products from './data/products'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

export default function App(){
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(p){
    setCart(c => [...c, p])
    setCartOpen(true)
  }
  function removeFromCart(id){
    setCart(c => c.filter((x,i)=> i!==id))
  }

  return (
    <div className='min-h-screen'>
      <Navbar openCart={()=>setCartOpen(true)} cartCount={cart.length} />
      <Hero />
      <main className='mx-auto max-w-7xl px-4 py-8'>
        <h2 className='text-2xl font-semibold mb-4'>Featured Wellness Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAdd={()=>addToCart(p)} />
          ))}
        </div>
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={()=>setCartOpen(false)} items={cart} onRemove={removeFromCart} />
    </div>
  )
}
