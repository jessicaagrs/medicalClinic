type InputProps = Readonly<{
  type:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'checkbox'
    | 'radio';
  value: string | number;
  name: string;
  placeholder?: string;
  classname: string;
  disabled?: boolean;
  id?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  checked?: boolean;
}>;

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
  required = false,
  checked = false,
  ...rest
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
      required={required}
      checked={checked}
      {...rest}
    />
  );
}
