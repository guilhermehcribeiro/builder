import { render, screen } from '@testing-library/react';

import Home from '.';

describe('Home page', () => {
  test('Deve conter um botão para compartilhar localização', () => {
    render(<Home />);

    const buttonShareMyLocation = screen.getByRole('button', {
      name: /Compartilhar minha localização/i
    });

    expect(buttonShareMyLocation).toBeInTheDocument();
  });

  test('Deve mostrar o texto "Descubra o clima perto de você!" quando carregar a página', () => {
    render(<Home />);

    expect(screen.getByText('Descubra o clima perto de você!')).toBeInTheDocument();
  });
});
