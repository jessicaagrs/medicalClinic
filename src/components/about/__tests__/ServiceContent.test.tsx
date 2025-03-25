import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ServiceContent } from '../ServiceContent';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ''} />;
  },
}));

describe('ServiceContent Component', () => {
  const mockProps = {
    title: 'Test Service',
    description: 'This is a test service description',
    image: '/test-image.jpg',
    ref: React.createRef<HTMLDivElement>(),
  };

  test('should renders component with all props', () => {
    render(<ServiceContent {...mockProps} />);

    expect(screen.getByText('Test Service')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test service description')
    ).toBeInTheDocument();

    const imageElement = screen.getByAltText('Test Service');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'src',
      expect.stringContaining('test-image.jpg')
    );
  });

  test('should applies correct styling and structure', () => {
    render(<ServiceContent {...mockProps} />);

    const container = screen.getByText('Test Service').closest('div');
    expect(container?.parentElement).toHaveClass(
      'flex',
      'rounded-lg',
      'bg-custom60'
    );

    expect(screen.getByText('Test Service')).toHaveClass(
      'text-lg',
      'font-bold'
    );

    expect(screen.getByText('This is a test service description')).toHaveClass(
      'max-w-[60ch]'
    );
  });

  test('should forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ServiceContent {...mockProps} ref={ref} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toHaveClass('flex', 'rounded-lg', 'bg-custom60');
  });

  test('should renders image with correct props', () => {
    render(<ServiceContent {...mockProps} />);

    const imageElement = screen.getByAltText('Test Service');
    expect(imageElement).toHaveAttribute('width', '500');
    expect(imageElement).toHaveAttribute('height', '300');
    expect(imageElement).toHaveAttribute('alt', 'Test Service');
    expect(imageElement).toHaveClass('rounded-r-lg');
  });
});
