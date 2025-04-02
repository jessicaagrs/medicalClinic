'use client';

import { RegisterContextProvider } from '@/contexts/RegisterContext';
import { TabNames } from '@/enums/enums';
import { Plans } from '@/interfaces/IPlan';
import Image from 'next/image';
import { useState } from 'react';
import { AroundForm } from '../globals/AroundForm';
import AddressForm from './AddressForm';
import ClinicForm from './ClinicForm';
import { PersonalForm } from './PersonalForm';
import { Tabs } from './Tabs';
import { TypeForm } from './TypeForm';

type FormRegisterProps = {
  readonly dataPlans: Plans[];
};

export default function FormRegister({ dataPlans }: FormRegisterProps) {
  const [tab, setTab] = useState(TabNames.TYPE);

  return (
    <RegisterContextProvider>
      <AroundForm>
        <div className="mt-5 flex flex-col items-center gap-14">
          <Image src="/icons/Logo.svg" alt="Logo" width={140} height={40} />
        </div>
        <Tabs selectedTab={tab} />
        {tab === TabNames.TYPE && <TypeForm onClickNextTab={setTab} />}
        {tab === TabNames.CLINIC && <ClinicForm onClickNextTab={setTab} />}
        {tab === TabNames.PERSONAL && (
          <PersonalForm onClickNextTab={setTab} options={dataPlans} />
        )}
        {tab === TabNames.ADDRESS && <AddressForm />}
      </AroundForm>
    </RegisterContextProvider>
  );
}
