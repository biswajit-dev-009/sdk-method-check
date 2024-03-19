'use client';
import React, { createContext, useState } from 'react';

interface TokenContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue: TokenContextType = {
  token: '',
  setToken: () => {},
};

export const TokenContext = createContext<TokenContextType>(defaultValue);

const TokenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string>('');

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
