'use client';
import React, { createContext, useEffect, useState, useContext } from 'react';
import { TokenContext } from './tokenContext';

interface SDK {
  init: () => Promise<void>;
  services: any
}

interface InitContextValue {
  sdk: SDK | null;
}

const defaultValue: InitContextValue = {
  sdk: null,
};

export const InitContext = createContext(defaultValue);

const InitProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useContext(TokenContext);
  const [sdk, setSDK] = useState<SDK | null>(null);

  useEffect(() => {
    const initializeSDK = async () => {
      if (!token) return;

      try {
        const { SDK } = await import('@oblo/selfcare-sdk');
        const apiConfig = {
          apiKey: token,
          apiVersion: 'v1',
          url: 'http://localhost',
          port: 3000,
        };
        const mqttConfig = {
          port: 5222,
          url: 'wss://localhost',
        };

        const sdkInstance = new SDK(apiConfig, mqttConfig);
        await sdkInstance.init();
        setSDK(sdkInstance);
        console.log('SDK initialized');
      } catch (error) {
        console.error('Error initializing SDK:', error);
      }
    };

    initializeSDK();
  }, [token]);

  return (
    <InitContext.Provider value={{ sdk }}>
      {children}
    </InitContext.Provider>
  );
};

export default InitProvider;
