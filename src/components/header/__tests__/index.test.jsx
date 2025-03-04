import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { SearchHeader } from '../SearchHeader';

let mockCallback;
describe('Header', () => {
  beforeAll(() => {
    mockCallback = jest.fn();
  });

  it('renders logo and navigation links', () => {
    render(<Header />);

    const logo = screen.getByAltText('logo');
    const listLinks = document.querySelectorAll('ul li');

    expect(logo).toBeInTheDocument();
    expect(listLinks.length).toBe(2);
  });

  it('renders input search', () => {
    render(<SearchHeader />);

    const input = screen.getByPlaceholderText('Digite sua busca');
    const button = document.querySelector('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should call the function when the button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<SearchHeader />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('search', expect.any(Object));

    consoleSpy.mockRestore();
  });
});
