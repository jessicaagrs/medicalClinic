import { fireEvent, render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Header from '../Header';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ''} />;
  },
}));

jest.mock('../SearchHeader', () => ({
  SearchHeader: () => <div data-testid="search-header">Search</div>,
}));

jest.mock('../../menu/MenuUser', () => ({
  __esModule: true,
  default: () => <div data-testid="menu-user">Menu User</div>,
}));

describe('Header', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));
    mockPush.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render unauthenticated state correctly', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(<Header />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
    expect(screen.getByTestId('search-header')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Acesso Clínica')).toBeInTheDocument();
  });

  test('should render authenticated state correctly', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'Test User' } },
      status: 'authenticated',
    });

    render(<Header />);

    expect(screen.getByTestId('menu-user')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
    expect(screen.queryByText('Cadastre-se')).not.toBeInTheDocument();
  });

  test('should handle login button click correctly', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(<Header />);
    fireEvent.click(screen.getByText('Login'));

    expect(mockPush).toHaveBeenCalledWith('/login');
  });

  test('should handle clinic access button click correctly', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    render(<Header />);
    fireEvent.click(screen.getByText('Acesso Clínica'));

    expect(mockPush).toHaveBeenCalledWith('/login?clinic=true');
  });
});
