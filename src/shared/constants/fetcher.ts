'use client';

import { useLayoutEffect, useEffect } from 'react';

import axios from 'axios';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
});

const AxiosInterceptor = ({ children }: any) => {
  useIsomorphicLayoutEffect(() => {
    const resInterceptor = (response: any) => {
      return response?.data;
    };

    const errInterceptor = async (error: any) => {
      return await Promise.reject(error);
    };

    const interceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => instance.interceptors.response.eject(interceptor);
  }, []);

  useIsomorphicLayoutEffect(() => {
    const reqInterceptor = (request: any) => {
      return request;
    };

    const errInterceptor = async (error: any) => {
      return await Promise.reject(error);
    };

    const interceptor = instance.interceptors.request.use(
      reqInterceptor,
      errInterceptor
    );

    return () => instance.interceptors.request.eject(interceptor);
  }, []);

  return children;
};

export default instance;
export { AxiosInterceptor };
