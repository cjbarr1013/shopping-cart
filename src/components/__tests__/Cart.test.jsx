import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Cart';

// Mock child components
vi.mock('../CartCard', () => ({
  default: ({ product }) => <div>{`Mock CartCard: ${product.name}`}</div>,
}));

vi.mock('../CartSummary', () => ({
  default: ({ subtotal }) => (
    <div>{`Mock CartSummary: Subtotal is $${subtotal}`}</div>
  ),
}));

// Define mockUseOutletContext before using it
const mockUseOutletContext = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: () => mockUseOutletContext(),
  };
});

// Reset the mock before each test
beforeEach(() => {
  mockUseOutletContext.mockReset();
});

describe('Cart Component', () => {
  it('renders the empty cart message when the cart is empty', () => {
    // Return an empty cart for this test
    mockUseOutletContext.mockReturnValue({
      cart: [],
      handleCartChange: vi.fn(),
      subtotal: 0,
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toBeInTheDocument();
  });

  it('renders the "Go back to store" link correctly', () => {
    mockUseOutletContext.mockReturnValue({
      cart: [],
      handleCartChange: vi.fn(),
      subtotal: 0,
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /go back to store/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/store/shop');
  });

  it('renders the correct number of CartCard components when the cart has items', () => {
    // Return a cart with items for this test
    mockUseOutletContext.mockReturnValue({
      cart: [
        { id: 1, name: 'Product 1', price: 10, quantity: 1 },
        { id: 2, name: 'Product 2', price: 20, quantity: 2 },
      ],
      handleCartChange: vi.fn(),
      subtotal: 50,
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock CartCard: Product 1')).toBeInTheDocument();
    expect(screen.getByText('Mock CartCard: Product 2')).toBeInTheDocument();
  });

  it('renders the CartSummary component with the correct subtotal', () => {
    // Return a cart with items for this test
    mockUseOutletContext.mockReturnValue({
      cart: [
        { id: 1, name: 'Product 1', price: 10, quantity: 1 },
        { id: 2, name: 'Product 2', price: 20, quantity: 2 },
      ],
      handleCartChange: vi.fn(),
      subtotal: 50,
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Mock CartSummary: Subtotal is $50')
    ).toBeInTheDocument();
  });

  it('matches snapshot when cart is empty', () => {
    mockUseOutletContext.mockReturnValue({
      cart: [],
      handleCartChange: vi.fn(),
      subtotal: 0,
    });

    const { asFragment } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when cart has items', () => {
    mockUseOutletContext.mockReturnValue({
      cart: [
        { id: 1, name: 'Product 1', price: 10, quantity: 1 },
        { id: 2, name: 'Product 2', price: 20, quantity: 2 },
      ],
      handleCartChange: vi.fn(),
      subtotal: 50,
    });

    const { asFragment } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
