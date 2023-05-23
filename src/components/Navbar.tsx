import Image from 'next/image';
import SearchDropdown from './SearchDropdown';
import Input from './SearchInput';
import Link from 'next/link';
import { Badge } from '../../components/ui/badge';
import Navbar2 from './Navbar2';

const Profile = () => {
  return (
    <div className="flex px-[10px]">
      <Image
        src={'../assets/icons/user.svg'}
        alt="user"
        height={24}
        width={24}
      />
      <label className="text-slate-500 font-light text-[16px]">Account</label>
    </div>
  );
};

const Compare = () => {
  return (
    <div className="flex px-[10px]">
      <Image
        src={'../assets/icons/compare.svg'}
        alt="user"
        height={24}
        width={24}
      />
      <label className="text-slate-500 font-light">Compare</label>
    </div>
  );
};

const Wishlist = () => {
  return (
    <div className="flex px-[10px] relative">
      <Image
        src={'../assets/icons/heart.svg'}
        alt="user"
        height={24}
        width={24}
      />
      <label className="text-slate-500 font-light">Wishlist</label>
      <Badge className="bg_primary rounded-[50%] text-white justify-center text-[10px] top-[-12px] right-[-5px] w-[20px] h-[20px] items-center absolute">
        5
      </Badge>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="flex px-[10px] relative">
      <Image
        src={'../assets/icons/cart.svg'}
        alt="user"
        height={24}
        width={24}
      />
      <label className="text-slate-500 font-light">Cart</label>
      <Badge className="bg_primary rounded-[50%] text-white justify-center text-[10px] top-[-12px] right-[-5px] w-[20px] h-[20px] items-center absolute">
        4
      </Badge>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
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
          <Input />
        </div>

        <div className="flex">
          <Profile />
          <Compare />
          <Wishlist />
          <Cart />
        </div>
      </div>

      <div className="flex justify-start items-center px-[5%] py-[13px] border-b border-[#c9c9c9] sticky top-0 bg-white">
        <Navbar2 />
      </div>
    </>
  );
};

export default Navbar;
