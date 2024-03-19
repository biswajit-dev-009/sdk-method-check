import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className='flex flex-[2] min-h-screen flex-col py-24 pr-24 pl-12 ml-72'>
      {children}
    </section>
  );
};

export default Container;
