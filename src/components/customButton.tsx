"use client"

import React from "react";

function CustomButton({
  title,
  onClick,
}: {
  title: String;
  onClick: () => void;
}) {
  return (
    <div
      className="bg-[#253D4E] w-full hover:bg-[#253D4E] rounded-[10px] flex flex-row justify-center"
      onClick={onClick}
    >
      <h6 className="my-3 mx-10 text-[#ffff] font-bold">{title}</h6>
    </div>
  );
}

export default CustomButton;
