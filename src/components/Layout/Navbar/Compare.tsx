import Image from 'next/image';

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

export default Compare;
