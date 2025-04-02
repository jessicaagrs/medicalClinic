type SelectProps = Readonly<{
  select: string;
  onChangeOption: (plan: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  required?: boolean;
}>;

export const Select = ({
  select,
  onChangeOption,
  options,
  required,
}: SelectProps) => {
  return (
    <select
      value={select}
      onChange={(e) => onChangeOption(e.target.value)}
      className="h-10 px-3 bg-custom70 outline-none rounded-lg cursor-pointer"
      required={required}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
