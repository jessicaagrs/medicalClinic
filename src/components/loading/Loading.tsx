type LoadingProps = {
  isLoading: boolean;
  fontSize?: string;
};

export const Loading = ({ fontSize = '4px', isLoading }: LoadingProps) => {
  if (!isLoading) return null;
  return <span className={`loader text-[4px]`} style={{ fontSize }}></span>;
};
