import Badge from '@/components/ui/Badge';
import Label from '@/components/ui/Label';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className="flex px-[10px] relative">
      <Image
        src={'../assets/icons/cart.svg'}
        alt="user"
        height={24}
        width={24}
      />
      <Label className="text-slate-500 font-light">Cart</Label>
      <Badge className="bg_primary rounded-[50%] text-white justify-center text-[10px] top-[-12px] right-[-5px] w-[20px] h-[20px] items-center absolute">
        4
      </Badge>
    </div>
  );
};

export default Cart;
