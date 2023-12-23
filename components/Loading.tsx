'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShowMore } from '@/components';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreCars = async () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <div>
      isLoading ? (
      <div className="mt-16 w-full flex-center">
        <Image
          src="/loader.svg"
          alt="loader"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      ) : ( );
    </div>
  );
}
//  {isLoading?(
//
//      <div className="mt-16 w-full flex-center">
//        <Image
//          src="/loader.svg"
//          alt="loader"
//          width={50}
//          height={50}
//          className="object-contain"
//        />
//      </div>;
//  )}
