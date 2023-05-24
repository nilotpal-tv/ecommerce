import Image from 'next/image';
import Link from 'next/link';

import CategoryBlock from '@/app/components/CategoryBlock';
import SearchDropdown from '@/app/components/SearchDropdown';
import Input from '@/components/ui/Input';
import Cart from './Cart';
import Compare from './Compare';
import Profile from './Profile';
import Wishlist from './Wishlist';

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-evenly items-center px-[5%] py-8 border-b border-[#c9c9c9]">
        <Link href="/">
          <Image
            src={'../assets/icons/Logo.svg'}
            width={215}
            height={66}
            alt="logo"
          />
        </Link>
        <div
          className="flex items-center bg-white px-4 py-2 rounded-[5px] w-[50%]"
          style={{ border: '1px solid var(--color-primary)' }}
        >
          <SearchDropdown />
          <Input
            className="border-none outline-none focus-visible:ring-0 focus-visible:outline-transparent focus-visible:outline-offset-0"
            placeholder="Search an item..."
          />
        </div>
        <div className="flex">
          <Profile />
          <Compare />
          <Wishlist />
          <Cart />
        </div>
      </div>
      <div className="flex justify-start items-center px-[5%] py-[13px] border-b border-[#c9c9c9] sticky top-0 bg-white">
        <CategoryBlock />
      </div>
    </nav>
  );
};

export default Navbar;
