import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

type TRecord = {
  id: string | number;
  [key: string]: any;
};

const useMemoisedGetOne = <T extends TRecord>(url: string): typeof returnState => {
  const cache = useRef<{ [key: string]: T }>({});

  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (!url) return;
    let cancelRequest = false;

    const fetchData = async () => {
      const memoisedRecord = cache.current[url];
      if (memoisedRecord) {
        setData(memoisedRecord);
        return;
      }

      try {
        const { data } = await axios.get(url);
        cache.current[url] = data;
        if (cancelRequest) return;

        setData(data);
        setError(null);
      } catch (e: any) {
        if (cancelRequest) return;
        setError(axios.isAxiosError(e ? e.response?.data?.error ?? 'Not found' : e));
        setData(null);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();

    return () => {
      cancelRequest = true;
    };
  }, [url]);

  const returnState = { isFetching, error, data, setData, cache: cache.current } as const;

  return returnState;
};

export default useMemoisedGetOne;
