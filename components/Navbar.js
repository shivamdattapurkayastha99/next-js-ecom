import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-start py-2'>
      <div className="logo mx-5">
        <Image src="/logo1.png" alt="" width={200} height={40} />
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-2 font-bold'>
          <Link href={'/'}><a><li>T-Shirts</li></a></Link>
          <Link href={'/'}><a><li>Hoodies</li></a></Link>
          <Link href={'/'}><a><li>Mugs</li></a></Link>
          <Link href={'/'}><a><li>Stickers</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <AiOutlineShoppingCart className='text-xl md:text-3xl'/>
      </div>
    </div>
  )
}

export default Navbar