import React from 'react';

function SecurityBox({ code }: { code: String }) {
  return (
    <div className="w-full p-4 flex justify-center bg-red-200 rounded-md items-center">
      <p className="font-bold text-lg text-[var(--color-secondary)] text-center tracking-widest select-none">
        {code}
      </p>
    </div>
  );
}

export default SecurityBox;
