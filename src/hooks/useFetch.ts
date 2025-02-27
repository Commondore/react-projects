import { useEffect, useState } from "react";

export const useFetch = <T>(defaultData: T, url: string): [T, boolean] => {
  const [data, setData] = useState<T>(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: T) => {
        setData(data);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, loading];
};
