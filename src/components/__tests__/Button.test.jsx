import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button Component', () => {
  it('renders the button with the correct text', () => {
    render(<Button text="Click me!" handleClick={() => {}} type="primary" />);

    const button = screen.getByRole('button', { name: 'Click me!' });
    expect(button).toBeInTheDocument();
  });

  it('calls handleClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button text="Click me!" handleClick={handleClick} type="primary" />
    );

    const button = screen.getByRole('button', { name: /click me!/i });
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call handleClick when not clicked', async () => {
    const handleClick = vi.fn();

    render(
      <Button text="Click me!" handleClick={handleClick} type="primary" />
    );

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies the correct class based on the type prop', () => {
    const { rerender } = render(
      <Button text="Primary Button" handleClick={() => {}} type="primary" />
    );

    const primaryButton = screen.getByRole('button', {
      name: /primary button/i,
    });
    expect(primaryButton).toHaveClass(/primary/i);

    rerender(
      <Button text="Secondary Button" handleClick={() => {}} type="secondary" />
    );

    const secondaryButton = screen.getByRole('button', {
      name: /secondary button/i,
    });
    expect(secondaryButton).toHaveClass(/secondary/i);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Button text="Click me!" handleClick={() => {}} type="primary" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
