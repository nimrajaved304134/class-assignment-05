import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
   <nav className='h-[134px] bg-[#A29875] flex items-center justify-between px-8'>

{/* logo */}

    <Link href='/' className='md:text-[60px] text-[75px] leading-[93.75] font-rye  hover:scale-110 transition-transform text-white font-serif'>
    MANZZARI
    </Link>

{/* searchbar */}
    <div className='hidden md:flex md:w-[550px]  relative items-center xl:w-[769.98px]'>
      <input
      type='text'
      placeholder='Search for Gold Jewellery, Diamond Jewellery and more...'
      className='w-full h-[56.24px] md:pl-2 pl-14 pr-4 rounded-[13.83px] outline-none text-[#6C757D] md:text-[3px] lg:text-[18.68px] leading-[25.48]'
      />
      <Search className='absolute top-1/2 right-4 transform -translate-y-1/2 text-black'/>
    </div>

{/* icons */}
    <div className='flex items-center space-x-6 pr-6'>
      <Search className='text-white hover:text-gray-300 cursor-pointer w-[32.42] h-[29.71] md:hidden'/>
      <Heart className='text-white hover:text-gray-300 cursor-pointer w-[32.42] h-[29.71]'/>
      <User className='text-white hover:text-gray-300 cursor-pointer w-[32.42] h-[29.71]'/>
      <ShoppingCart className='text-white hover:text-gray-300 cursor-pointer w-[32.42] h-[29.71]'/>
    </div>
   </nav>
  );
};

export default Header;



