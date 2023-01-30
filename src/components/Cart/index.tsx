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
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart, selectCartItems } from '@/redux/slice/cart'
import { ProductData } from '@/@types/ProductData'
import { CartEmpity } from '../CartEmpity'

export function Cart() {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  function handleRemoveProductFromCart(cartItem: ProductData) {
    dispatch(removeItemFromCart(cartItem))
  }

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
          {cartItems.length === 0 ? (
            <CartEmpity />
          ) : (
            cartItems.map((cartItem: ProductData) => {
              return (
                <CartProduct key={cartItem.id}>
                  <RemoveProductButton
                    onClick={() => {
                      handleRemoveProductFromCart(cartItem)
                    }}
                  >
                    <X size={12} />
                  </RemoveProductButton>
                  <Image src={cartItem.photo} width={45} height={60} alt="" />
                  <span>{cartItem.name}</span>
                  <ProductQuantityContainer>
                    <QuantityInput productId={cartItem.id} />
                  </ProductQuantityContainer>
                  <ProductPrice>
                    R${cartItem.price * cartItem.quantity}
                  </ProductPrice>
                </CartProduct>
              )
            })
          )}
        </CartProductsContainer>

        <CartDetails>
          <span>Total:</span>
          <strong>
            R$
            {cartItems.reduce(
              (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
              0,
            )}
          </strong>
        </CartDetails>

        <CartBuyButton>Finalizar Compra</CartBuyButton>
      </CartContent>
    </Dialog.Portal>
  )
}
