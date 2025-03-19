import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SearchHeader } from '../SearchHeader';

describe('SearchHeader', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('deve renderizar o componente corretamente', () => {
    render(<SearchHeader />);

    expect(screen.getByPlaceholderText('Digite sua busca')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('deve atualizar o valor do input quando digitado', () => {
    render(<SearchHeader />);

    const searchInput = screen.getByPlaceholderText('Digite sua busca');
    fireEvent.change(searchInput, { target: { value: 'teste' } });

    expect(searchInput).toHaveValue('teste');
  });

  test('deve mostrar o botão de cancelar quando houver texto no input', () => {
    render(<SearchHeader />);

    const searchInput = screen.getByPlaceholderText('Digite sua busca');
    fireEvent.change(searchInput, { target: { value: 'teste' } });

    expect(screen.getByLabelText('cancel')).toBeInTheDocument();
  });

  test('deve chamar a função de busca quando pressionar Enter', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<SearchHeader />);

    const searchInput = screen.getByPlaceholderText('Digite sua busca');
    fireEvent.change(searchInput, { target: { value: 'teste' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    expect(consoleSpy).toHaveBeenCalled();
  });

  test('deve chamar a função de busca quando clicar no botão', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<SearchHeader />);

    const searchInput = screen.getByPlaceholderText('Digite sua busca');
    const button = screen.getByLabelText('search');

    fireEvent.change(searchInput, { target: { value: 'teste' } });
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalled();
  });
});
