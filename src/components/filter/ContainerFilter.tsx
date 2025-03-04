'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '../globals/Button';
import Input from '../globals/Input';
import SpecialtyFilter from './SpecialtyFilter';

export default function ContainerFilter() {
  const [searchSpecialty, setSearchSpecialty] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSpecialty(event.target.value);
    setSearchLocation('');
  };
  return (
    <section className="full-width-container shadow-md">
      <form className="flex justify-center items-center mt-10 gap-6">
        <div className="flex items-center shadow-md rounded-lg relative">
          <div
            className="w-12 h-12 flex justify-center items-center bg-custom60
            rounded-l-lg absolute -left-2"
          >
            <Image src="/Search.svg" alt="search" width={20} height={20} />
          </div>
          <Input
            classname="h-12 w-96 pl-12 bg-custom70 outline-none rounded-r-lg"
            placeholder="Digite a especialidade"
            name="especialidade"
            type="text"
            value={searchSpecialty}
            onChange={handleOnChangeSearch}
          />
        </div>
        <div className="flex items-center shadow-md rounded-lg relative">
          <div
            className="w-12 h-12 flex justify-center items-center bg-custom60
            rounded-l-lg absolute -left-2"
          >
            <Image src="/Location.svg" alt="location" width={20} height={20} />
          </div>
          <Input
            classname="h-12 w-96 pl-12 bg-custom70 outline-none rounded-r-lg"
            placeholder="Digite sua localização"
            name="localizacao"
            type="text"
            value={searchLocation}
            onChange={(event) => setSearchLocation(event.target.value)}
          />
        </div>
        <Button height="h-12">Buscar</Button>
      </form>
      <SpecialtyFilter />
    </section>
  );
}
