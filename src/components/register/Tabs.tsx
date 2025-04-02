import { TabNames } from '@/enums/enums';

type TabsProps = {
  selectedTab: string;
};

export const Tabs = ({ selectedTab }: TabsProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-16">
      <div className="flex gap-3 sm:gap-8 items-center justify-center mt-10">
        <span
          className={`rounded-full  w-5 h-5 ${selectedTab === TabNames.TYPE ? 'bg-custom10' : 'bg-custom40'}`}
        ></span>
        <hr className="bg-custom40 h-0 w-16" />
        <span
          className={`rounded-full w-5 h-5 ${selectedTab === TabNames.PERSONAL || selectedTab === TabNames.CLINIC ? 'bg-custom10' : 'bg-custom40'}`}
        ></span>
        <hr className="bg-custom40 h-0 w-16" />
        <span
          className={`rounded-full  w-5 h-5 ${selectedTab === TabNames.ADDRESS ? 'bg-custom10' : 'bg-custom40'}`}
        ></span>
      </div>
      {selectedTab === TabNames.TYPE && (
        <h1 className="px-3 sm:px-0">
          Por favor, selecione o tipo do cadastro
        </h1>
      )}
      {selectedTab === TabNames.PERSONAL && (
        <h1 className="px-3 sm:px-0">
          Agora, informe alguns dados básicos para seu cadastro
        </h1>
      )}
      {selectedTab === TabNames.ADDRESS && (
        <h1 className="px-3 sm:px-0">Por fim, informe seu endereço</h1>
      )}
    </div>
  );
};
