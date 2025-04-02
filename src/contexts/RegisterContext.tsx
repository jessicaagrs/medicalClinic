'use client';
import { createContext, useMemo, useState } from 'react';

type AddressContextType = {
  street: string;
  numberStreet: string;
  state: string;
  complement: string;
};

type RegisterContextType = {
  typeRegister: string;
  name: string;
  email: string;
  phone: string;
  havePlan: boolean;
  plan: string;
  image: string;
  password: string;
  confirmPassword: string;
  address: AddressContextType;
  cnpj: string;
};

export const RegisterContext = createContext({
  register: {} as RegisterContextType,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setRegister: (value: RegisterContextType) => {},
});

interface ProviderProps {
  readonly children: React.ReactNode;
}

export function RegisterContextProvider({ children }: ProviderProps) {
  const [register, setRegister] = useState<RegisterContextType>(
    {} as RegisterContextType
  );

  const contextValue = useMemo(
    () => ({ register, setRegister }),
    [register, setRegister]
  );

  return (
    <RegisterContext.Provider value={contextValue}>
      {children}
    </RegisterContext.Provider>
  );
}
