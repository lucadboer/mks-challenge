import Home from '../../pages'
import { render } from '@testing-library/react'
import { TestWrapperComponent } from '../TestWrapperComponent'

describe('Home Page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home products={} />, {
      wrapper: TestWrapperComponent,
    })

    expect(getByText('Sistemas')).toBeInTheDocument()
  })
})
