import Image from 'next/image';

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

export default Profile;
