import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SpecialtyFilter from '../SpecialtyFilter';

describe('SpecialtyFilter', () => {
  const specialties = [
    'Neurologista',
    'Dermatologista',
    'Cardiologista',
    'Ortopedista',
    'Oftalmologista',
    'Pediatria',
    'Reumatologista',
  ];

  it('should render all specialties', () => {
    render(<SpecialtyFilter />);

    expect(
      screen.getByText('Você pode estar procurando por estas categorias:')
    ).toBeInTheDocument();

    specialties.forEach((specialty) => {
      expect(screen.getByText(specialty)).toBeInTheDocument();
    });

    const removeButtons = screen.getAllByText('X');
    expect(removeButtons).toHaveLength(specialties.length);
  });
});
