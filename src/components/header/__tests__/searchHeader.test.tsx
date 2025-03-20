import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SearchHeader } from '../SearchHeader';

describe('SearchHeader', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('should render the component correctly', () => {
    render(<SearchHeader />);

    expect(screen.getByPlaceholderText('Digite sua busca')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should update the input value when typed', () => {
    render(<SearchHeader />);

    const searchInput = screen.getByPlaceholderText('Digite sua busca');
    fireEvent.change(searchInput, { target: { value: 'teste' } });

    expect(searchInput).toHaveValue('teste');
  });

  test('should show the cancel button when there is text in the input', () => {
    render(<SearchHeader />);

    const searchInput = screen.getByPlaceholderText('Digite sua busca');
    fireEvent.change(searchInput, { target: { value: 'teste' } });

    expect(screen.getByLabelText('cancel')).toBeInTheDocument();
  });

  test('should call the search function when pressing Enter', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<SearchHeader />);

    const searchInput = screen.getByPlaceholderText('Digite sua busca');
    fireEvent.change(searchInput, { target: { value: 'teste' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    expect(consoleSpy).toHaveBeenCalled();
  });

  test('should call the search function when clicking the button', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<SearchHeader />);

    const searchInput = screen.getByPlaceholderText('Digite sua busca');
    const button = screen.getByLabelText('search');

    fireEvent.change(searchInput, { target: { value: 'teste' } });
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalled();
  });
});
