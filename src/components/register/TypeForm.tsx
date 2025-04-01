import { TabNames } from '@/enums/enums';
import useRegisterContext from '@/hooks/useRegisterContext';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../globals/Button';
import Input from '../globals/Input';

type TypeFormProps = {
  readonly onClickNextTab: (type: TabNames) => void;
};

export const TypeForm = ({ onClickNextTab }: TypeFormProps) => {
  const [type, setType] = useState('user');
  const { setRegister, register } = useRegisterContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register.typeRegister = type;
    setRegister(register);
    onClickNextTab(TabNames.PERSONAL);
  };

  return (
    <form className="w-full px-8 flex flex-col mt-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user" className="flex items-center gap-2">
          <Input
            id="user"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="user"
            type="radio"
            value="user"
            checked={type === 'user'}
            onChange={(e) => setType(e.target.value)}
          />
          Cliente
        </label>
      </div>
      <div>
        <label htmlFor="specialist" className="flex items-center gap-2">
          <Input
            id="specialist"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="specialist"
            type="radio"
            value="specialist"
            checked={type === 'specialist'}
            onChange={(e) => setType(e.target.value)}
          />
          Especialista
        </label>
      </div>
      <div className="flex flex-col items-center gap-2 mt-5">
        <Button width="w-64" ariaLabel="Entrar">
          Avançar
        </Button>
        <Link href="/" className="hover:underline text-custom10 text-sm mt-6">
          Voltar a página inicial
        </Link>
      </div>
    </form>
  );
};
