import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <header className='bg-gray-700 py-4'>
        <nav className='flex justify-between item-center text-white px-4'>
          <div className='text-2xl text-gray-200'>Ecommerce</div>
        <ul className='flex gap-5'>
            <li><Link href="/" className="text-white hover:text-blue-500">Home</Link></li>
            <li><Link href="/products" className="text-white  hover:text-500">Products</Link></li>
            <li><Link href="/categories"  className="text-white  hover:text-blue-500">Categories</Link></li>
            <li><Link href="/contact-us"  className="text-white  hover:text-blue-500">ContactUs</Link></li>
        </ul>
        </nav>
        </header>
    </div>
  )
}

export default Navbar