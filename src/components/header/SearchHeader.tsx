import { useState } from 'react';
import ButtonInput from '../globals/ButtonInput';
import Input from '../globals/Input';

export const SearchHeader = () => {
  const [searchValue, setSearchValue] = useState('');
  const [seeCancelButton, setSeeCancelButton] = useState(false);

  const handleClickSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('search', event);
    console.log('search', searchValue);
  };

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setSeeCancelButton(event.target.value.length > 0);
  };

  const handleMouseEnterSearch = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      console.log('search', event);
    }
  };

  return (
    <div className="relative">
      <Input
        classname="border border-custom20 outline-transparent focus:outline-2 focus:outline-offset-2 focus:outline-custom20 h-10 rounded-lg px-3 py-5"
        type="search"
        value={searchValue}
        name="search"
        id="search-header"
        placeholder="Digite sua busca"
        onChange={handleOnChangeSearch}
        onKeyDown={handleMouseEnterSearch}
      />
      <ButtonInput
        seeCancelButton={seeCancelButton}
        onClick={handleClickSearch}
        classname="absolute right-0 top-0 h-full w-10 flex justify-center items-center rounded-r-lg"
      />
    </div>
  );
};
