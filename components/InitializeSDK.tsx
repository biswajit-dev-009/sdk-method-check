'use client';
import { useState, useContext } from 'react';

import Input from '@/components/Input';
import Button from './Button';
import { TokenContext } from '../services/tokenContext';

const InitializeSDK = () => {
  const { setToken } = useContext(TokenContext);
  const [lToken, setLToken] = useState('');
  const [message, setMessage] = useState('');

  const handleToken = () => {
    window.localStorage.setItem('token', lToken);
    setToken(lToken);
    setLToken('');
  };

  const handleLocalToken = () => {
    const token = window.localStorage.getItem('token');
    if (token) {
      setLToken(token);
    } else {
      setMessage(`You do not have any token...`);
    }
  };

  return (
    <div className='mb-5'>
      <div className='flex gap-4 items-end'>
        <div className='w-1/2'>
          <Input
            handleChange={(e) => {
              setLToken(e.target.value);
              setMessage('');
            }}
            label='Please enter Bearer token'
            value={lToken}
            placeholder='eg: bc4196ea05d204cc542f6084c9d9c7d7683e10dac29a8903d9feccc2692bab3e511d205f8aab5b3152dd84591a502f00b75a8f9a337a7d49b3e1d5fbbb5a424375552f4b84020615408eb099f2e63e21e7dcb09975752825b174ce66438fdbcb73f20ce1fe0323a21a7003fb2'
          />
        </div>
        <Button disabled={!lToken} className='w-44 h-12' onClick={handleToken}>
          Initialize SDK
        </Button>
      </div>
      <button
        onClick={handleLocalToken}
        className='h-8 w-40 border border-[#007F73] mt-2'
      >
        Use local token
      </button>
      {message ? <div>{message}</div> : null}
    </div>
  );
};

export default InitializeSDK;
