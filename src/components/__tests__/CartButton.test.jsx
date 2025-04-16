import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartButton from '../CartButton';

// Mock CSS module
vi.mock('../styles/CartButton.module.css', () => ({
  btn: 'btn',
  animate: 'animate',
  animateImg: 'animateImg',
}));

// Mock cart icon
vi.mock('../assets/icons/cart-outline.svg', () => 'mock-cart-icon');

// Mock toUSD utility
vi.mock('../utils/utils', () => ({
  toUSD: { format: (value) => `$${value.toFixed(2)}` },
}));

describe('CartButton Component', () => {
  it('renders the button with the correct subtotal and cart icon', () => {
    render(<CartButton subtotal={100} handleClick={() => {}} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const img = screen.getByAltText('cart outline');
    expect(img).toBeInTheDocument();

    const subtotal = screen.getByText('$100.00');
    expect(subtotal).toBeInTheDocument();
  });

  it('calls handleClick when the button is clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<CartButton subtotal={100} handleClick={handleClick} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('adds animation class when subtotal changes', () => {
    const { rerender } = render(
      <CartButton subtotal={100} handleClick={() => {}} />
    );

    const button = screen.getByRole('button');
    expect(button).not.toHaveClass(/animate/i); // Initially, no animation

    // Change subtotal to trigger animation
    rerender(<CartButton subtotal={200} handleClick={() => {}} />);
    expect(button).toHaveClass(/animate/i); // Animation class is added

    // Fast-forward the timer
    setTimeout(() => {
      expect(button).not.toHaveClass(/animate/i); // Animation class should be removed after timeout
    }, 1000);
  });

  it('does not add animation class when subtotal remains the same', () => {
    const { rerender } = render(
      <CartButton subtotal={100} handleClick={() => {}} />
    );

    const button = screen.getByRole('button');
    expect(button).not.toHaveClass(/animate/i);

    // Rerender with the same subtotal
    rerender(<CartButton subtotal={100} handleClick={() => {}} />);
    expect(button).not.toHaveClass(/animate/i);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <CartButton subtotal={100} handleClick={() => {}} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
