"use client";

import Image from "next/image";
import React from "react";
import googleLogo from "../../public/assets/Google Logo.svg";

function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="border-solid border-[1px] rounded-[8px] border-[#F2F3F4] shadow-md shadow-[rgba(24, 24, 24, 0.05)] w-full rounded-[10px]"
      onClick={onClick}
    >
      <div className="flex flex-row justify-center items-center my-3">
        <Image
          src={googleLogo}
          alt={"google logo"}
          className="mr-3"
          height={28}
          width={28}
        />
        <h3 className="text-[#7E7E7E] font-bold text-xl">
          Continue with Google
        </h3>
      </div>
    </div>
  );
}

export default GoogleButton;
