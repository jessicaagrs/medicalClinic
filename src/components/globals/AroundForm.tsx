type AroundFormProps = {
  children: React.ReactNode;
};

export const AroundForm = ({ children }: AroundFormProps) => {
  return (
    <main className="bg-[url(/background/Background.png)] h-screen flex justify-center">
      <div className="bg-custom30 w-full sm:max-w-[700px] flex flex-col items-center">
        {children}
      </div>
    </main>
  );
};
