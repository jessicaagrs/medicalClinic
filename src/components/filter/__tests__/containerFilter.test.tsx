import { render, screen } from '@testing-library/react';
import ContainerFilter from '../ContainerFilter';

describe('ContainerFilter Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render correct', () => {
    render(<ContainerFilter />);

    expect(
      screen.getByPlaceholderText('Digite a especialidade')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Digite sua localização')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
  });
});
