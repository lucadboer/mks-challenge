import { Header } from '@/components/Header'
import { Footer, ProductsContainer } from '@/styles/home'
import { Product } from '@/components/Product'
import { ProductData } from '@/@types/ProductData'
import axios from 'axios'
// import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

// interface HomeProps {
//   products: ProductData[]
// }

export default function Home() {
  const [products, setProducts] = useState<ProductData[]>([])

  async function teste() {
    const response = await axios.get(
      'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
    )
    setProducts(response.data.products)
  }

  useEffect(() => {
    teste()
  }, [])

  console.log(products)

  return (
    <div>
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

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await axios.get(
//     'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
//   )

//   const products = response.data

//   return {
//     props: {
//       products,
//     },
//     revalidate: (60 * 60) / 2,
//   }
// }
