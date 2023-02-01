import { GetStaticProps } from 'next'
import { ProductData } from '@/@types/ProductData'
import axios from 'axios'

import { Header } from '../components/Header'
import { Footer, ProductsContainer } from '../styles/home'
import { Product } from '../components/Product'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export interface HomeProps {
  products: ProductData[]
}

export default function Home({ products }: HomeProps) {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1250}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />

      <Header />

      <ProductsContainer>
        {products.map((product) => {
          return <Product key={product.id} product={product} />
        })}
      </ProductsContainer>

      <Footer>
        <span>MKS sistemas © Todos os direitos reservados</span>
      </Footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
  )

  const products = response.data.products
  console.log(products)

  return {
    props: {
      products,
    },
    revalidate: (60 * 60) / 2,
  }
}
