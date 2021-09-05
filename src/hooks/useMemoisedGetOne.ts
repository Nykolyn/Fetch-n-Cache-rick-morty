import axios from 'axios';
import { useState } from 'react';

type TRecord = {
  id: string | number;
  [key: string]: any;
};

type TCache<T> = { [key: string]: T };

const useMemoisedGetOne = <T extends TRecord>(cached: TCache<T> = {}, cacheName?: string): typeof returnState => {
  const [cache, setCache] = useState<TCache<T>>(cached);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>();

  const fetchData = async (url: string) => {
    if (!url) return;

    const memoisedRecord = cache[url];
    if (memoisedRecord) {
      setData(memoisedRecord);
      return;
    }

    try {
      setIsFetching(true);
      const { data } = await axios.get(url);
      const newCache = { ...cache, [url]: data };
      if (cacheName) localStorage.setItem(cacheName, JSON.stringify(newCache));
      setCache(newCache);

      setData(data);
      if (error) setError(null);
    } catch (e: any) {
      setError(axios.isAxiosError(e ? e.response?.data?.error ?? 'Not found' : e));
      if (data) setData(null);
    } finally {
      setIsFetching(false);
    }
  };

  const returnState = { isFetching, fetchData, error, data, setData, setCache, cache } as const;

  return returnState;
};

export default useMemoisedGetOne;
