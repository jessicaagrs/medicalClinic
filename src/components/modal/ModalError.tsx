import Button from '../globals/Button';

type ModalErrorProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export const ModalError = ({
  isOpen,
  title,
  message,
  onClose,
}: ModalErrorProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-8">{title}</h2>
        <p className="mb-8">{message}</p>
        <Button onClick={onClose}>Fechar</Button>
      </div>
    </div>
  );
};
