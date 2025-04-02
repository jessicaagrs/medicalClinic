import { Plans } from '@/interfaces/IPlan';
import { render, screen } from '@testing-library/react';
import FormRegister from '../FormRegister';

jest.mock('../TypeForm', () => ({
  TypeForm: () => (
    <form aria-label="Formulário de seleção de tipo de cadastro"></form>
  ),
}));

describe('FormRegister Component', () => {
  const mockDataPlans: Plans[] = [
    { id: '06d30d84-d0e7-40ab-8600-64c902797e6e', name: 'Plan A' },
    { id: '06d30d84-d0e7-40ab-8600-999999997e6e', name: 'Plan B' },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should renders without crashing', () => {
    render(<FormRegister dataPlans={mockDataPlans} />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  test('should renders the Tabs component with the correct selectedTab', () => {
    render(<FormRegister dataPlans={mockDataPlans} />);
    expect(
      screen.getByText('Por favor, selecione o tipo do cadastro')
    ).toBeInTheDocument();
  });

  test('should renders TypeForm when tab is TYPE', () => {
    render(<FormRegister dataPlans={mockDataPlans} />);
    expect(
      screen.getByLabelText('Formulário de seleção de tipo de cadastro')
    ).toBeInTheDocument();
  });

  test('should renders the Image component with correct props', () => {
    render(<FormRegister dataPlans={mockDataPlans} />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toHaveAttribute('src', '/icons/Logo.svg');
    expect(logo).toHaveAttribute('width', '140');
    expect(logo).toHaveAttribute('height', '40');
  });
});
