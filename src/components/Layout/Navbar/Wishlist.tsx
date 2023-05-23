import Badge from '@/components/ui/Badge';
import Image from 'next/image';

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

export default Wishlist;
