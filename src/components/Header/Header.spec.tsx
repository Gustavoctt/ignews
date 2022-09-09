import { render, screen } from '@testing-library/react';
import { Header } from '.';

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

jest.mock('next-auth/react', () => {
  return {
    useSession(){
      return [null, false]
    }
  }
})

describe('Header Components', () => {
  it('renders correctly', () => {
    render(
      <Header />
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})