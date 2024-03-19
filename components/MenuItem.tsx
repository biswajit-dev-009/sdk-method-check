'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Routes } from '@/types';

const MenuItem: React.FC<Routes> = ({ childrens, title, route }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [clickedItem, setClickedItem] = useState('');

  const handleClickMenu = useCallback((item: string) => {
    setClickedItem((prev) => (prev === item ? '' : item));
  }, []);

  useEffect(() => {
    if (pathname.includes(title.toLocaleLowerCase())) {
      handleClickMenu(title);
    }
  }, [pathname]);

  return (
    <>
      <div
        onClick={() => {
          if (route) {
            router.push(route);
          } else {
            handleClickMenu(title);
          }
        }}
        className='h-12 text-white cursor-pointer py-2 px-4 flex justify-between items-center hover:opacity-75 w-full'
      >
        <div className='text-lg font-medium'>{title}</div>
        {typeof childrens !== 'undefined' ? (
          <>
            {title === clickedItem ? (
              <Image
                src={'/icons/down_arrow.svg'}
                alt='arrow'
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={'/icons/right_arrow.svg'}
                alt='arrow'
                width={20}
                height={20}
              />
            )}
          </>
        ) : null}
      </div>
      {title === clickedItem && typeof childrens !== 'undefined' ? (
        <>
          {childrens.map((el) => (
            <Link href={el.route} key={el.id}>
              <div
                className={`flex px-8 py-2 text-white w-full gap-4 items-center cursor-pointer ${
                  pathname.includes(el.method) ? 'opacity-70' : 'opacity-100'
                } hover:opacity-70`}
              >
                <Image
                  src={'/icons/dot.svg'}
                  alt='bullet'
                  width={10}
                  height={10}
                />
                <div>{el.method}</div>
              </div>
            </Link>
          ))}
        </>
      ) : null}
    </>
  );
};

export default MenuItem;
