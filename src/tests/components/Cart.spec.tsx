import { Cart } from '@/components/Cart'
import { render, screen } from '@testing-library/react'
import { TestWrapperComponent } from '../TestWrapperComponent'

describe('Cart Component', () => {
  it('renders correctly', () => {
    render(<Cart />, { wrapper: TestWrapperComponent })

    expect(screen.getByText('Carrinho de compras')).toBeInTheDocument()
  })
})
