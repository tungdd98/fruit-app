import { ThemeProvider } from '@mui/material/styles';
import { fireEvent, render, screen } from '@testing-library/react';

import { theme } from '../theme';
import App from './app';

const renderApp = () =>
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderApp();
    expect(baseElement).toBeTruthy();
  });

  it('should render the page heading', () => {
    renderApp();
    expect(
      screen.getByRole('heading', { level: 1, name: /banana/i }),
    ).toBeTruthy();
  });

  it('should filter the list when a status is selected', () => {
    renderApp();
    expect(screen.getByText(/kiwi/i)).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Chín' }));

    expect(screen.queryByText(/kiwi/i)).toBeNull();
    expect(screen.getByText(/banana —/i)).toBeTruthy();
  });
});
