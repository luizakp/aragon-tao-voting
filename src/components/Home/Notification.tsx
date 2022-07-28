import Image from 'next/image';
import { useState } from 'react';
import Cross from '../../../public/images/Cross.svg';
export function Notification() {
  const [open, setOpen] = useState(true);

  function handleClose() {
    setOpen(false);
  }
  if (open) {
    return (
      <div className="absolute w-full">
        <div className="bg-blue-0/40 flex items-center justify-center relative">
          <p className="py-[14px] text-center px-14">
            🎉🎉 Join our Param Parties to collaborate on the design of our
            governance. 🎉🎉
          </p>
          <button
            className="absolute right-6 flex items-center"
            onClick={handleClose}
          >
            <Image src={Cross} alt="Close" />
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
