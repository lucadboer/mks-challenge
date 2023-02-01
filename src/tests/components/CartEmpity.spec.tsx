import { render } from '@testing-library/react'
import { CartEmpity } from '../../components/CartEmpity'
import { TestWrapperComponent } from '../TestWrapperComponent'

describe('Cart Empity Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CartEmpity />, {
      wrapper: TestWrapperComponent,
    })

    expect(getByText('Parece que seu carrinho está vazio.')).toBeInTheDocument()
  })
})
