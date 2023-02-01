import Home, { getStaticProps } from '../../pages'
import { render } from '@testing-library/react'
import { TestWrapperComponent } from '../TestWrapperComponent'
import { productsMocked } from '../mocks/products'

describe('Home Page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Home products={productsMocked} />, {
      wrapper: TestWrapperComponent,
    })

    expect(getByText('Sistemas')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          products: productsMocked,
        },
        revalidate: (60 * 60) / 2,
      }),
    )
  })
})
