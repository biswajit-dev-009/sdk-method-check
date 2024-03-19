'use client';
import React, { useState, useContext, useEffect } from 'react';

import Title from '@/components/Title';
import Input from '@/components/Input';
import Button from '@/components/Button';
import ResponseCard from '@/components/ResponseCard';
import Select from '@/components/Select';

import { convertToJson, isJson } from '@/helpers';
import { InitContext } from '../../services/initContext';

const Builder = () => {
  const { sdk } = useContext(InitContext);

  const [service, setService] = useState('');
  const [apiData, setApiData] = useState('');
  const [error, setError] = useState(false);
  const [method, setMethod] = useState('');
  const [apiResponse, setApiResponse] = useState<any>();
  const [services, setServices] = useState<string[]>([]);
  const [methods, setMethods] = useState<string[]>([]);

  const handleClearForm = () => {
    setApiResponse('');
    setMethod('');
    setError(false);
    setApiData('');
    setService('');
  };

  const handleConvertToJson = () => {
    if (isJson(apiData)) {
      const jsonData = convertToJson(apiData);
      const beautifiedJson = JSON.stringify(jsonData, null, 2);
      setApiData(beautifiedJson);
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (!sdk?.services) {
      setServices([]);
      return;
    }
    setServices(Object.keys(sdk?.services));
  }, [sdk]);

  useEffect(() => {
    if (!service) return;
    const methods = Object.keys(sdk?.services[service]);
    setMethods(methods);
  }, [service, sdk]);

  const handleSendRequest = async () => {
    try {
      const services = sdk?.services[service];
      console.log('🚀 ~ handleSDK ~ data:', services, apiData);
      if (services) {
        const resp = await services[method](apiData ? JSON.parse(apiData) : {});

        setApiResponse(resp);
      }
    } catch (error: any) {
      console.log('🚀 ~ handleSDK ~ error:', error);
      setApiResponse(error?.message!);
    }
  };

  return (
    <div className='flex gap-5'>
      <div className='w-1/2'>
        <Title title={`Check ${service} service ${method} method`} />
        <div className='mt-5 mb-3 w-96'>
          <Select
            label='Please choose Service'
            data={services}
            handleSelectedValue={(val) => setService(val)}
          />
        </div>
        <div className='mt-5 mb-3 w-96'>
          <Select
            label='Please choose Service'
            data={methods}
            handleSelectedValue={(val) => setMethod(val)}
          />
        </div>
        <div className='mb-24 w-96 h-60'>
          <Input
            isMultiline
            handleChange={(e) => setApiData(e.target.value)}
            label='Please API required data'
            value={apiData}
            placeholder='eg: {"name": "John Deo"}'
          />
          {error ? (
            <div className='text-red-600'>Please enter valid JSON data</div>
          ) : null}
          <button
            disabled={!apiData}
            onClick={handleConvertToJson}
            className='px-2 py-1 bg-[#007F73] text-white hover:opacity-75'
          >
            Beautify
          </button>
        </div>
        <Button onClick={handleSendRequest}>Send request</Button>
        <Button className='mt-2' onClick={handleClearForm}>
          Clear
        </Button>
      </div>
      <div>
        <h3 className='text-xl font-semibold mb-4'>Response</h3>
        <ResponseCard response={JSON.stringify(apiResponse)} />
      </div>
    </div>
  );
};

export default Builder;
