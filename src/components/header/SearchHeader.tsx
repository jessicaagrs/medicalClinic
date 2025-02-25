import Image from 'next/image';

export const SearchHeader = () => {
  const handleClickSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('search', event);
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
      <input
        className={`input border border-custom20 outline-transparent focus:outline-2 focus:outline-offset-2 focus:outline-custom20 h-10 rounded-lg px-3 py-5 $`}
        type="search"
        name="search"
        id="search-header"
        placeholder="Digite sua busca"
        onKeyDown={handleMouseEnterSearch}
      />
      <button
        className="absolute right-0 top-0 h-full w-10 flex justify-center items-center rounded-r-lg"
        onClick={handleClickSearch}
      >
        <Image src="/Search.svg" alt="search" width={20} height={20} />
      </button>
    </div>
  );
};
