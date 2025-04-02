import { TabNames } from '@/enums/enums';
import useRegisterContext from '@/hooks/useRegisterContext';
import { isValidEmail, isValidURL } from '@/utils/formatter';
import { fireEvent, render, screen } from '@testing-library/react';
import { PersonalForm } from '../PersonalForm';

jest.mock('../../../hooks/useRegisterContext');

jest.mock('../../../utils/formatter', () => ({
  isValidEmail: jest.fn(),
  isValidURL: jest.fn(),
  cleanCaracter: jest.fn((value) => value),
  formatPhone: jest.fn((value) => value),
}));

describe('PersonalForm Component', () => {
  const mockSetRegister = jest.fn();
  const mockOnClickNextTab = jest.fn();

  beforeEach(() => {
    (useRegisterContext as jest.Mock).mockReturnValue({
      register: { typeRegister: null },
      setRegister: mockSetRegister,
    });

    jest.clearAllMocks();
  });

  test('renders all form fields correctly', () => {
    render(
      <PersonalForm
        onClickNextTab={mockOnClickNextTab}
        options={[{ id: '1', name: 'Plan A' }]}
      />
    );

    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Imagem de perfil/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Criar uma senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Repetir a senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tem plano\?/i)).toBeInTheDocument();
  });

  test('validates email and shows error for invalid email', async () => {
    (isValidEmail as jest.Mock).mockReturnValue(false);

    render(<PersonalForm onClickNextTab={mockOnClickNextTab} options={[]} />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(screen.getByText(/Avançar/i));

    expect(mockSetRegister).not.toHaveBeenCalled();
  });

  test('validates password and shows error for mismatched passwords', () => {
    render(
      <PersonalForm
        onClickNextTab={mockOnClickNextTab}
        options={[{ id: '1', name: 'Plan A' }]}
      />
    );

    fireEvent.change(screen.getByLabelText(/Criar uma senha/i), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText(/Repetir a senha/i), {
      target: { value: 'differentPassword' },
    });
    fireEvent.click(screen.getByText(/Avançar/i));

    expect(mockSetRegister).not.toHaveBeenCalled();
  });

  test('validates image URL and shows error for invalid URL', () => {
    (isValidURL as jest.Mock).mockReturnValue(false);

    render(
      <PersonalForm
        onClickNextTab={mockOnClickNextTab}
        options={[{ id: '1', name: 'Plan A' }]}
      />
    );

    fireEvent.change(screen.getByLabelText(/Imagem de perfil/i), {
      target: { value: 'invalid-url' },
    });
    fireEvent.click(screen.getByText(/Avançar/i));

    expect(mockSetRegister).not.toHaveBeenCalled();
  });

  test('submits the form with valid data', () => {
    (isValidEmail as jest.Mock).mockReturnValue(true);
    (isValidURL as jest.Mock).mockReturnValue(true);

    render(
      <PersonalForm
        onClickNextTab={mockOnClickNextTab}
        options={[{ id: '1', name: 'Plan A' }]}
      />
    );

    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: '123456789' },
    });
    fireEvent.change(screen.getByLabelText(/Imagem de perfil/i), {
      target: { value: 'http://example.com/image.jpg' },
    });
    fireEvent.change(screen.getByLabelText(/Criar uma senha/i), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText(/Repetir a senha/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByText(/Avançar/i));

    expect(mockSetRegister).toHaveBeenCalled();
    expect(mockOnClickNextTab).toHaveBeenCalledWith(TabNames.ADDRESS);
  });

  test('renders plan selection dropdown when "Tem plano?" is checked', () => {
    render(
      <PersonalForm
        onClickNextTab={mockOnClickNextTab}
        options={[{ id: '1', name: 'Plan A' }]}
      />
    );

    fireEvent.click(screen.getByLabelText(/Tem plano\?/i));
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('calls onClickNextTab when "Recomeçar" button is clicked', () => {
    render(
      <PersonalForm
        onClickNextTab={mockOnClickNextTab}
        options={[{ id: '1', name: 'Plan A' }]}
      />
    );

    fireEvent.click(screen.getByText(/Recomeçar/i));
    expect(mockOnClickNextTab).toHaveBeenCalledWith(TabNames.TYPE);
  });
});
