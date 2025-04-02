import { TabNames, TypeRegister } from '@/enums/enums';
import useRegisterContext from '@/hooks/useRegisterContext';
import { fireEvent, render, screen } from '@testing-library/react';
import { TypeForm } from '../TypeForm';

jest.mock('../../../hooks/useRegisterContext');

describe('TypeForm Component', () => {
  const mockSetRegister = jest.fn();
  const mockOnClickNextTab = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRegisterContext as jest.Mock).mockReturnValue({
      register: { typeRegister: null },
      setRegister: mockSetRegister,
    });
  });

  test('should call onClickNextTab with TabNames.PERSONAL when "Cliente" is selected', () => {
    render(<TypeForm onClickNextTab={mockOnClickNextTab} />);

    const clienteRadio = screen.getByLabelText('Cliente');
    fireEvent.click(clienteRadio);

    const form = screen.getByRole('form', {
      name: 'Formulário de seleção de tipo de cadastro',
    });
    fireEvent.submit(form);

    // Assertions
    expect(mockSetRegister).toHaveBeenCalledWith({
      typeRegister: TypeRegister.USER,
    });
    expect(mockOnClickNextTab).toHaveBeenCalledWith(TabNames.PERSONAL);
  });

  test('should call onClickNextTab with TabNames.CLINIC when "Clínica" is selected', () => {
    render(<TypeForm onClickNextTab={mockOnClickNextTab} />);

    // Select "Clínica" option
    const clinicaRadio = screen.getByLabelText('Clínica');
    fireEvent.click(clinicaRadio);

    const form = screen.getByRole('form', {
      name: 'Formulário de seleção de tipo de cadastro',
    });
    fireEvent.submit(form);

    expect(mockSetRegister).toHaveBeenCalledWith({
      typeRegister: TypeRegister.CLINIC,
    });
    expect(mockOnClickNextTab).toHaveBeenCalledWith(TabNames.CLINIC);
  });

  test('should update the register object correctly based on the selected type', () => {
    render(<TypeForm onClickNextTab={mockOnClickNextTab} />);

    const clinicaRadio = screen.getByLabelText('Clínica');
    fireEvent.click(clinicaRadio);

    const form = screen.getByRole('form', {
      name: 'Formulário de seleção de tipo de cadastro',
    });
    fireEvent.submit(form);

    expect(mockSetRegister).toHaveBeenCalledWith({
      typeRegister: TypeRegister.CLINIC,
    });
  });
});
