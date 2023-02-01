import { Header } from '../../components/Header'
import { render } from '@testing-library/react'
import { TestWrapperComponent } from '../TestWrapperComponent'

describe('Header Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />, {
      wrapper: TestWrapperComponent,
    })

    expect(getByText('Sistemas')).toBeInTheDocument()
  })
})
