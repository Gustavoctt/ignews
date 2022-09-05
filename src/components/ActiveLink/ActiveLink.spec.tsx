import { render, screen } from '@testing-library/react';
import { debug } from 'console';
import { ActiveLink } from '.';

// o Screen é uma maneira mais fácil de verificar se o componente está em tela.

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink Components', () => {
  it('renders correctly', () => {
    render(
      <ActiveLink activeClassName='active' href="/">
        <a>Home</a>
      </ActiveLink>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('adds active class if the link as currently', () => {
    render(
      <ActiveLink activeClassName='active' href="/">
        <a>Home</a>
      </ActiveLink>
    )

    expect(screen.getByText('Home')).toHaveClass('active')
  })

  debug()
})