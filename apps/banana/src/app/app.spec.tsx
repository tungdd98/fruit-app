import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';

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
});
