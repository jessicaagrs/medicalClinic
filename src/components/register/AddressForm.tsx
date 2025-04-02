import { TypeRegister } from '@/enums/enums';
import { useLoading } from '@/hooks/useLoading';
import { useModal } from '@/hooks/useModal';
import useRegisterContext from '@/hooks/useRegisterContext';
import { clinicService } from '@/services/clinicService';
import { userService } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../globals/Button';
import Input from '../globals/Input';

export default function AddressForm() {
  const [street, setStreet] = useState('');
  const [numberStreet, setNumberStreet] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');
  const { register, setRegister } = useRegisterContext();
  const router = useRouter();
  const { componentModalError, isOpen, openModal } = useModal();
  const [error, setError] = useState('');
  const { isLoading, renderLoading, stopLoading, componentLoading } =
    useLoading();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    renderLoading();
    if (!register.address) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      register.address = {} as any;
    }
    register.address.street = street;
    register.address.numberStreet = numberStreet;
    register.address.state = state;
    register.address.complement = complement;
    setRegister(register);

    try {
      const response =
        register.typeRegister === TypeRegister.USER
          ? await userService.createUser(register)
          : await clinicService.createClinic(register);

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Tente novamente mais tarde.');
        openModal();
      }

      stopLoading();

      if (register.typeRegister === TypeRegister.USER) router.push('/login');
      else router.push('/login?clinic=true');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      stopLoading();
      setError(error.message || 'Erro inesperado, contate o suporte.');
      openModal();
    }
  };

  return (
    <form className="w-full px-8" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col gap-2 mt-5">
        <label htmlFor="street">Rua</label>
        <Input
          id="street"
          classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
          name="street"
          type="text"
          placeholder="Informe o nome da rua"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className="flex gap-3 mt-2 flex-col sm:flex-row">
        <div className="flex flex-col gap-2 mt-5 sm:w-1/2">
          <label htmlFor="numberStreet">Número</label>
          <Input
            id="numberStreet"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="numberStreet"
            type="text"
            placeholder="Informe o número da casa"
            value={numberStreet}
            onChange={(e) => setNumberStreet(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-5 sm:w-1/2">
          <label htmlFor="state">Estado</label>
          <Input
            id="state"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="state"
            type="text"
            placeholder="Informe o estado, ex: SP"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-2 my-5">
        <label htmlFor="complement">Complemento</label>
        <Input
          id="complement"
          classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
          name="complement"
          type="text"
          placeholder="Complemento (opcional)"
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />
      </fieldset>
      <fieldset className="flex flex-col items-center gap-5 mt-5">
        <Button className="w-36" ariaLabel="Entrar">
          {isLoading ? componentLoading() : 'Enviar'}
        </Button>
        <Link href="/" className="hover:underline text-custom10 text-sm mb-3">
          Voltar a página inicial
        </Link>
      </fieldset>
      {isOpen && componentModalError('Erro ao cadastrar novo usuário', error)}
    </form>
  );
}
