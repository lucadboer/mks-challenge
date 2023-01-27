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
} from './styles'

import smartWatch from '../../assets/apple-watch.svg'
import Image from 'next/image'
import { QuantityInput } from '../QuantityInput'

export function Cart() {
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
          <CartProduct>
            <Image src={smartWatch} width={45} height={60} alt="" />
            <span>Apple Watch Series 4 GPS</span>
            <ProductQuantityContainer>
              <QuantityInput />
            </ProductQuantityContainer>
            <ProductPrice>R$399</ProductPrice>
          </CartProduct>
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
