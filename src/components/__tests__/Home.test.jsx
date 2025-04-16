import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../Home';

// Mock the useNavigate function globally
const mockNavigate = vi.fn();
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Clear mock calls before each test
beforeEach(() => {
  mockNavigate.mockClear();
});

describe('Home Component', () => {
  it('renders the welcome message', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check if the welcome message is rendered
    expect(
      screen.getByRole('heading', { name: /welcome to/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /the store/i })
    ).toBeInTheDocument();
  });

  it('renders the SHOP NOW button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check if the button is rendered
    const button = screen.getByRole('button', { name: /shop now/i });
    expect(button).toBeInTheDocument();
  });

  it('navigates to the shop page when SHOP NOW button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Simulate button click
    const button = screen.getByRole('button', { name: /shop now/i });
    await user.click(button);

    // Check if navigation was triggered
    expect(mockNavigate).toHaveBeenCalledWith('/store/shop');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Snapshot test
    expect(asFragment()).toMatchSnapshot();
  });
});
