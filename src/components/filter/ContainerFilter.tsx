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
      <form className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6">
        <fieldset className="flex max-w-[300px] sm:max-w-96 items-center shadow-md rounded-lg relative">
          <div
            className="w-12 h-12 flex justify-center items-center bg-custom60
            rounded-l-lg absolute -left-2"
          >
            <Image
              src="/icons/Search.svg"
              alt="search"
              width={20}
              height={20}
            />
          </div>
          <Input
            classname="h-12 max-w-[300px] w-96 pl-12 bg-custom70 outline-none rounded-r-lg focus:shadow-md focus:shadow-custom90"
            placeholder="Digite a especialidade"
            name="especialidade"
            type="text"
            value={searchSpecialty}
            onChange={handleOnChangeSearch}
            aria-label="Buscar especialidade"
          />
        </fieldset>
        <fieldset className="flex max-w-[300px] sm:max-w-96 items-center shadow-md rounded-lg relative">
          <div
            className="w-12 h-12 flex justify-center items-center bg-custom60
            rounded-l-lg absolute -left-2"
          >
            <Image
              src="/icons/Location.svg"
              alt="location"
              width={20}
              height={20}
            />
          </div>
          <Input
            classname="h-12 max-w-[300px] w-96 pl-12 bg-custom70 outline-none rounded-r-lg focus:shadow-md focus:shadow-custom90"
            placeholder="Digite sua localização"
            name="localizacao"
            type="text"
            value={searchLocation}
            onChange={(event) => setSearchLocation(event.target.value)}
            aria-label="Buscar localização"
          />
        </fieldset>
        <Button className="h-12 max-w-[300px] w-96 md:max-w-24">Buscar</Button>
      </form>
      <SpecialtyFilter />
    </section>
  );
}
