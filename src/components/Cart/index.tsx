import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CartBuyButton,
  CartClose,
  CartContent,
  CartDetails,
  CartProduct,
  CartProductsContainer,
  CartTitle,
  ProductPrice,
  ProductQuantityContainer,
  RemoveProductButton,
} from './styles'

import Image from 'next/image'
import { QuantityInput } from '../QuantityInput'
import { useSelector } from 'react-redux'
import { selectCartItems } from '@/redux/slice/cart'
import { ProductData } from '@/@types/ProductData'

export function Cart() {
  const cartItems = useSelector(selectCartItems)
  console.log(cartItems)

  return (
    <Dialog.Portal>
      <CartContent>
        <CartClose>
          <X size={22} weight="bold" />
        </CartClose>
        <CartTitle>
          Carrinho <br /> de compras
        </CartTitle>

        <CartProductsContainer>
          {cartItems.map((cartItem: ProductData) => {
            return (
              <CartProduct key={cartItem.id}>
                <RemoveProductButton>
                  <X size={12} />
                </RemoveProductButton>
                <Image src={cartItem.photo} width={45} height={60} alt="" />
                <span>{cartItem.name}</span>
                <ProductQuantityContainer>
                  <QuantityInput />
                </ProductQuantityContainer>
                <ProductPrice>R${cartItem.price / 1}</ProductPrice>
              </CartProduct>
            )
          })}
        </CartProductsContainer>

        <CartDetails>
          <span>Total:</span>
          <strong>R$798</strong>
        </CartDetails>

        <CartBuyButton>Finalizar Compra</CartBuyButton>
      </CartContent>
    </Dialog.Portal>
  )
}
