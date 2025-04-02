import { useLoading } from '@/hooks/useLoading';
import { useModal } from '@/hooks/useModal';
import useRegisterContext from '@/hooks/useRegisterContext';
import { userService } from '@/services/userService';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import AddressForm from '../AddressForm';

jest.mock('next/navigation', () => ({ useRouter: jest.fn() }));
jest.mock('../../../hooks/useModal');
jest.mock('../../../hooks/useLoading');
jest.mock('../../../services/userService');
jest.mock('../../../services/clinicService');
jest.mock('../../../hooks/useRegisterContext');

describe('AddressForm', () => {
  const mockSetRegister = jest.fn();
  const mockPush = jest.fn();
  const mockOpenModal = jest.fn();
  const mockRenderLoading = jest.fn();
  const mockStopLoading = jest.fn();

  beforeEach(() => {
    (useRegisterContext as jest.Mock).mockReturnValue({
      register: { typeRegister: 'user', address: {} },
      setRegister: mockSetRegister,
    });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useModal as jest.Mock).mockReturnValue({
      componentModalError: jest.fn(),
      isOpen: false,
      openModal: mockOpenModal,
    });
    (useLoading as jest.Mock).mockReturnValue({
      isLoading: false,
      renderLoading: mockRenderLoading,
      stopLoading: mockStopLoading,
      componentLoading: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('submits successfully for TypeRegister.USER', async () => {
    (userService.createUser as jest.Mock).mockResolvedValue({ ok: true });

    render(<AddressForm />);

    fireEvent.change(screen.getByPlaceholderText('Informe o nome da rua'), {
      target: { value: 'Rua A' },
    });
    fireEvent.change(screen.getByPlaceholderText('Informe o número da casa'), {
      target: { value: '123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Informe o estado, ex: SP'), {
      target: { value: 'SP' },
    });

    fireEvent.submit(screen.getByLabelText('Formulário de endereço'));

    await waitFor(() => {
      expect(mockRenderLoading).toHaveBeenCalled();
      expect(userService.createUser).toHaveBeenCalledWith(
        expect.objectContaining({
          address: {
            street: 'Rua A',
            numberStreet: '123',
            state: 'SP',
            complement: '',
          },
        })
      );
      expect(mockPush).toHaveBeenCalledWith('/login');
      expect(mockStopLoading).toHaveBeenCalled();
    });
  });

  test('submits successfully for TypeRegister.USER', async () => {
    (userService.createUser as jest.Mock).mockResolvedValue({ ok: true });

    render(<AddressForm />);

    fireEvent.change(screen.getByPlaceholderText('Informe o nome da rua'), {
      target: { value: 'Rua A' },
    });
    fireEvent.change(screen.getByPlaceholderText('Informe o número da casa'), {
      target: { value: '123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Informe o estado, ex: SP'), {
      target: { value: 'SP' },
    });

    fireEvent.submit(screen.getByLabelText('Formulário de endereço'));

    await waitFor(() => {
      expect(mockRenderLoading).toHaveBeenCalled();
      expect(userService.createUser).toHaveBeenCalledWith(
        expect.objectContaining({
          address: {
            street: 'Rua A',
            numberStreet: '123',
            state: 'SP',
            complement: '',
          },
        })
      );
      expect(mockPush).toHaveBeenCalledWith('/login');
      expect(mockStopLoading).toHaveBeenCalled();
    });
  });
});
