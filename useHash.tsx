import { useCallback, useEffect, useState} from 'react';

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
    (newHash: string) => {
      if (newHash !== hash) location.hash = newHash;
    },
    [hash]
  )

  return [hash, updateHash];
};
