import Image from 'next/image'
import axios from 'axios'
import { useEffect } from 'react'
import { Header } from '@/components/Header'

export default function Home() {
  async function teste() {
    const teste = await axios.get(
      'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name',
    )
    console.log(teste)
  }

  useEffect(() => {}, [])

  return (
    <div>
      <Header />
    </div>
  )
}
