import { TabNames } from '@/enums/enums';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Tabs } from '../Tabs';

describe('Tabs Component', () => {
  test('renders the correct text for TYPE tab', () => {
    render(<Tabs selectedTab={TabNames.TYPE} />);
    expect(
      screen.getByText('Por favor, selecione o tipo do cadastro')
    ).toBeInTheDocument();
  });

  test('renders the correct text for PERSONAL tab', () => {
    render(<Tabs selectedTab={TabNames.PERSONAL} />);
    expect(
      screen.getByText('Agora, informe alguns dados básicos para seu cadastro')
    ).toBeInTheDocument();
  });

  test('renders the correct text for ADDRESS tab', () => {
    render(<Tabs selectedTab={TabNames.ADDRESS} />);
    expect(
      screen.getByText('Por fim, informe seu endereço')
    ).toBeInTheDocument();
  });
});
