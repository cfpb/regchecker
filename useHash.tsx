import { useCallback, useEffect, useState} from 'react';

interface RegValue {
  label: string,
  value: string
}

export const useHash = () => {
  const [hash, setHash] = useState(() => location.hash.slice(1));

  const hashChangeHandler = useCallback(() => {
    setHash(location.hash.slice(1));
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  const updateHash = useCallback(
    (e: RegValue) => {
      if (e.value !== hash) location.hash = e.value;
    },
    [hash]
  )

  return [hash, updateHash] as [string, (e: RegValue) => void]
};
