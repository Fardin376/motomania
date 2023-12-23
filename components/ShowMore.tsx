'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ShowMoreProps } from '@/types';
import { updateSearchParams } from '@/utils';
import CustomButton from './CustomButton';
import { useState } from 'react';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = async () => {
    setIsLoading(true);

    const newLimit = (pageNumber + 1) * 10;

    const newPathname = updateSearchParams('limit', `${newLimit}`);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      router.push(newPathname, { scroll: false });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="w-full flex-center gap-5 mt-10 relative">
      {isLoading && (
        <div className="flex-center">
          <Image
            src="/loader.svg"
            alt="loader"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      )}
      {!isLoading && !isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
