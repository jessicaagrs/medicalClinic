import { TabNames } from '@/enums/enums';
import { useModal } from '@/hooks/useModal';
import useRegisterContext from '@/hooks/useRegisterContext';
import { Plans } from '@/interfaces/IPlan';
import {
  cleanCaracter,
  formatPhone,
  isValidEmail,
  isValidURL,
} from '@/utils/formatter';
import { useState } from 'react';
import Button from '../globals/Button';
import Input from '../globals/Input';
import { Select } from '../globals/Select';

type PersonalFormProps = Readonly<{
  onClickNextTab: (type: TabNames) => void;
  options: Plans[];
}>;

export const PersonalForm = ({
  onClickNextTab,
  options,
}: PersonalFormProps) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [havePlan, setHavePlan] = useState(false);
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const { register, setRegister } = useRegisterContext();
  const { isOpen, componentModalError, openModal } = useModal();
  const [plan, setPlan] = useState('');
  const [error, setError] = useState('');

  const handleClickNextTab = () => {
    onClickNextTab(TabNames.TYPE);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      openModal();
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      openModal();
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email inválido.');
      openModal();
      return;
    }

    if (!isValidURL(image)) {
      setError('URL inválida para imagem de perfil.');
      openModal();
      return;
    }

    register.havePlan = havePlan;
    register.name = name;
    register.phone = cleanCaracter(phone);
    register.email = email;
    register.image = image;
    register.password = password;
    register.plan = plan;
    setRegister(register);
    onClickNextTab(TabNames.ADDRESS);
  };

  return (
    <form className="w-full px-8" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col gap-2 mt-3">
        <label htmlFor="name">Nome</label>
        <Input
          id="name"
          classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
          name="name"
          type="text"
          placeholder="Digite seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className="flex flex-col sm:flex-row gap-3 mt-2">
        <div className="flex flex-col gap-2 mt-3 sm:w-1/2">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-3 sm:w-1/2">
          <label htmlFor="phone">Telefone</label>
          <Input
            id="phone"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="phone"
            type="tel"
            placeholder="Digite seu telefone"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            required
          />
        </div>
      </fieldset>
      <fieldset className="flex items-center gap-2 mt-3">
        <Input
          id="plan"
          classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
          name="plan"
          type="checkbox"
          value="havePlan"
          checked={havePlan}
          onChange={(e) => setHavePlan(e.target.checked)}
        />
        <label htmlFor="plan">Tem plano?</label>
        {havePlan && (
          <Select
            select={plan}
            onChangeOption={setPlan}
            options={options}
            required={havePlan}
          />
        )}
      </fieldset>
      <fieldset className="flex flex-col gap-2 mt-3">
        <label htmlFor="image">Imagem de perfil</label>
        <Input
          id="image"
          classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
          name="image"
          type="text"
          value={image}
          placeholder="Digite a URL da imagem"
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className="flex gap-3 mt-2 flex-col sm:flex-row">
        <div className="flex flex-col gap-2 mt-3 sm:w-1/2">
          <label htmlFor="password">Criar uma senha</label>
          <Input
            id="password"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="password"
            type="password"
            placeholder="Digite uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-3 sm:w-1/2">
          <label htmlFor="confirmPassword">Repetir a senha</label>
          <Input
            id="confirmPassword"
            classname="h-12 pl-5 bg-custom70 outline-none rounded-lg"
            name="confirmPassword"
            type="password"
            placeholder="Repetir a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
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
      {isOpen && componentModalError('Erro ao cadastrar novo usuário', error)}
    </form>
  );
};
