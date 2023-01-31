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
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, selectCartItems } from '@/redux/slice/cart'
import { toast } from 'react-toastify'

interface ProductProps {
  product: ProductData
}

export function Product({ product }: ProductProps) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  function handleAddProductToCart() {
    const checkIfItemAlreadyExists = cartItems.some(
      (item) => item.id === product.id,
    )

    if (!checkIfItemAlreadyExists) {
      dispatch(addItemToCart(product))
      return toast.success('Produto adicionado no carrinho!')
    }

    return toast.info('Produto já está no carrinho')
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
