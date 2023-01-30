import Image from 'next/image'

import {
  BuyButton,
  ProductCard,
  ProductDetails,
  ProductImageContainer,
  ProductInfo,
} from './styles'
import { Bag } from 'phosphor-react'
import { ProductData } from '@/@types/ProductData'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '@/redux/slice/cart'

interface ProductProps {
  product: ProductData
}

export function Product({ product }: ProductProps) {
  const dispatch = useDispatch()

  function handleAddProductToCart() {
    dispatch(addItemToCart(product))
  }

  return (
    <ProductCard>
      <ProductImageContainer>
        <Image src={product.photo} alt="" width={150} height={150} />
      </ProductImageContainer>
      <ProductInfo>
        <span>{product.name}</span>
        <strong>R${product.price / 1}</strong>
      </ProductInfo>
      <ProductDetails>
        Redesigned from scratch and completely revised.
      </ProductDetails>
      <BuyButton onClick={handleAddProductToCart}>
        <Bag weight="bold" />
        COMPRAR
      </BuyButton>
    </ProductCard>
  )
}
