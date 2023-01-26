// import axios from 'axios'
// import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer, ProductsContainer } from '@/styles/home'
import { Product } from '@/components/Product'

export default function Home() {
  // async function teste() {
  //   const teste = await axios.get(
  //     'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name',
  //   )
  //   console.log(teste)
  // }

  // useEffect(() => {}, [])

  return (
    <div>
      <Header />
      <ProductsContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsContainer>

      <Footer>
        <span>MKS sistemas © Todos os direitos reservados</span>
      </Footer>
    </div>
  )
}
