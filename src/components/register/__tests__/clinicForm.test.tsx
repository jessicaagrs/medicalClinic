import { TabNames } from '@/enums/enums';
import { useModal } from '@/hooks/useModal';
import useRegisterContext from '@/hooks/useRegisterContext';
import { isValidEmail } from '@/utils/formatter';
import { fireEvent, render, screen } from '@testing-library/react';
import ClinicForm from '../ClinicForm';

jest.mock('../../../hooks/useModal', () => ({
  useModal: jest.fn(),
}));

jest.mock('../../../hooks/useRegisterContext');

jest.mock('../../../utils/formatter', () => ({
  isValidEmail: jest.fn(),
  cleanCaracter: jest.fn(),
  formatCNPJ: jest.fn((value) => value),
  formatPhone: jest.fn((value) => value),
}));

describe('ClinicForm Component', () => {
  const mockOnClickNextTab = jest.fn();
  const mockOpenModal = jest.fn();
  const mockSetRegister = jest.fn();

  beforeEach(() => {
    (useModal as jest.Mock).mockReturnValue({
      componentModalError: jest.fn(),
      isOpen: true,
      openModal: mockOpenModal,
    });

    (useRegisterContext as jest.Mock).mockReturnValue({
      register: { typeRegister: null },
      setRegister: mockSetRegister,
    });

    (isValidEmail as jest.Mock).mockReturnValue(true);
    jest.clearAllMocks();
  });

  test('renders the form with all fields', () => {
    render(<ClinicForm onClickNextTab={mockOnClickNextTab} />);

    expect(screen.getByLabelText('Razão social')).toBeInTheDocument();
    expect(screen.getByLabelText('CNPJ')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirmar Senha')).toBeInTheDocument();
    expect(screen.getByLabelText('Telefone')).toBeInTheDocument();
  });

  test('shows an error when passwords do not match', () => {
    render(<ClinicForm onClickNextTab={mockOnClickNextTab} />);

    fireEvent.change(screen.getByLabelText('Senha'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText('Confirmar Senha'), {
      target: { value: 'password456' },
    });

    fireEvent.submit(screen.getByRole('form'));

    expect(mockOpenModal).toHaveBeenCalled();
  });

  test('shows an error when password is less than 6 characters', () => {
    render(<ClinicForm onClickNextTab={mockOnClickNextTab} />);

    fireEvent.change(screen.getByLabelText('Senha'), {
      target: { value: '123' },
    });
    fireEvent.change(screen.getByLabelText('Confirmar Senha'), {
      target: { value: '123' },
    });

    fireEvent.submit(screen.getByRole('form'));

    expect(mockOpenModal).toHaveBeenCalled();
  });

  test('shows an error when CNPJ is less than 14 characters', () => {
    render(<ClinicForm onClickNextTab={mockOnClickNextTab} />);

    fireEvent.change(screen.getByLabelText('CNPJ'), {
      target: { value: '123456789' },
    });

    fireEvent.submit(screen.getByRole('form'));

    expect(mockOpenModal).toHaveBeenCalled();
  });

  test('shows an error when email is invalid', () => {
    (isValidEmail as jest.Mock).mockReturnValue(false);

    render(<ClinicForm onClickNextTab={mockOnClickNextTab} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.submit(screen.getByRole('form'));

    expect(mockOpenModal).toHaveBeenCalled();
  });

  test('calls onClickNextTab when form is valid', () => {
    render(<ClinicForm onClickNextTab={mockOnClickNextTab} />);

    fireEvent.change(screen.getByLabelText('Razão social'), {
      target: { value: 'Clinic Name' },
    });
    fireEvent.change(screen.getByLabelText('CNPJ'), {
      target: { value: '12345678901234' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'clinic@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Senha'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText('Confirmar Senha'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText('Telefone'), {
      target: { value: '1234567890' },
    });

    fireEvent.submit(screen.getByRole('form'));

    expect(mockOnClickNextTab).toHaveBeenCalledWith(TabNames.ADDRESS);
  });
});
