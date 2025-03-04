type InputProps = {
  readonly type: 'text' | 'number' | 'email' | 'password' | 'search';
  readonly value: string | number;
  readonly name: string;
  readonly placeholder: string;
  readonly classname: string;
  readonly disabled?: boolean;
  readonly id?: string;
  readonly onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  id,
  value,
  name,
  placeholder,
  classname,
  disabled,
  onChange,
  onKeyDown,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className={`input ${classname}`}
      onKeyDown={onKeyDown}
    />
  );
}
