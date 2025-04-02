import { TabNames } from '@/enums/enums';
import { useModal } from '@/hooks/useModal';
import useRegisterContext from '@/hooks/useRegisterContext';
import {
  cleanCaracter,
  formatCNPJ,
  formatPhone,
  isValidEmail,
} from '@/utils/formatter';
import { useState } from 'react';
import Button from '../globals/Button';
import Input from '../globals/Input';

type ClinicFormProps = {
  readonly onClickNextTab: (type: TabNames) => void;
};

export default function ClinicForm({ onClickNextTab }: ClinicFormProps) {
  const [reason, setReason] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState('');
  const { componentModalError, isOpen, openModal } = useModal();
  const { register, setRegister } = useRegisterContext();

  const handleClickNextTab = () => {
    onClickNextTab(TabNames.TYPE);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      openModal();
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      openModal();
    }

    if (cnpj.length < 14) {
      setError('O CNPJ deve ter pelo menos 14 caracteres.');
      openModal();
    }

    if (!isValidEmail(email)) {
      setError('Email inválido.');
      openModal();
    }

    register.name = reason;
    register.cnpj = cleanCaracter(cnpj);
    register.email = email;
    register.password = password;
    register.phone = cleanCaracter(phone);
    setRegister(register);
    onClickNextTab(TabNames.ADDRESS);
  };

  return (
    <form className="w-full px-8" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col gap-2 mt-3">
        <label htmlFor="reason">Razão social</label>
        <Input
          id="reason"
          classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
          name="reason"
          type="text"
          placeholder="Digite a razão social da clínica"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className="flex gap-3 mt-2 flex-col sm:flex-row">
        <div className="flex flex-col gap-2 mt-3 sm:w-1/2">
          <label htmlFor="cnpj">CNPJ</label>
          <Input
            id="cnpj"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="cnpj"
            type="text"
            placeholder="Digite o CNPJ com 14 dígitos"
            value={cnpj}
            onChange={(e) => setCnpj(formatCNPJ(e.target.value))}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-3 sm:w-1/2">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="email"
            type="text"
            placeholder="Digite o email da clínica"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </fieldset>
      <fieldset className="flex gap-3 mt-2 flex-col sm:flex-row">
        <div className="flex flex-col gap-2 mt-3 sm:w-1/2">
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="password"
            type="password"
            placeholder="Digite a senha da clínica"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-3 sm:w-1/2">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <Input
            id="confirmPassword"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col gap-2 mt-3 sm:w-1/2">
        <label htmlFor="phone">Telefone</label>
        <Input
          id="phone"
          classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
          name="phone"
          type="tel"
          placeholder="Digite o telefone de contato"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          required
        />
      </fieldset>
      <fieldset className="flex items-center justify-between gap-2 my-5">
        <Button
          className="w-24 sm:w-36 text-sm sm:text-base"
          ariaLabel="Entrar"
          type="button"
          onClick={handleClickNextTab}
        >
          Recomeçar
        </Button>
        <Button
          className="w-24 sm:w-36 text-sm sm:text-base"
          ariaLabel="Entrar"
        >
          Avançar
        </Button>
      </fieldset>
      {isOpen && componentModalError('Erro ao cadastrar clínica', error)}
    </form>
  );
}
