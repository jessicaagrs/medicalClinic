import { Loading } from '@/components/loading/Loading';
import { useState } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const renderLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const componentLoading = (fontSize?: string) => {
    return <Loading fontSize={fontSize} isLoading={isLoading} />;
  };

  return { isLoading, renderLoading, stopLoading, componentLoading };
}
