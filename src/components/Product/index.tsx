import {
  BuyButton,
  ProductCard,
  ProductDetails,
  ProductImageContainer,
  ProductInfo,
} from './styles'
import appleWatch from '../../assets/apple-watch.svg'
import Image from 'next/image'
import { Bag } from 'phosphor-react'

export function Product() {
  return (
    <ProductCard>
      <ProductImageContainer>
        <Image src={appleWatch} alt="" width={150} height={150} />
      </ProductImageContainer>
      <ProductInfo>
        <span>Apple Watch Series 4 GPS</span>
        <strong>R$399</strong>
      </ProductInfo>
      <ProductDetails>
        Redesigned from scratch and completely revised.
      </ProductDetails>
      <BuyButton>
        <Bag weight="bold" />
        COMPRAR
      </BuyButton>
    </ProductCard>
  )
}
