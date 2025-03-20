import { ModalError } from '@/components/modal/ModalError';
import { useState } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const componentModalError = (title: string, message: string) => {
    return (
      <ModalError
        isOpen={isOpen}
        title={title}
        message={message}
        onClose={closeModal}
      />
    );
  };

  return { isOpen, openModal, closeModal, componentModalError };
}
