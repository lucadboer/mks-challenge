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
  ContainerQuantityAndPrice,
  ProductPrice,
  ProductQuantityContainer,
  RemoveProductButton,
} from './styles'

import Image from 'next/image'
import { QuantityInput } from '../QuantityInput'
import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../redux/slice/cart'
import { ProductData } from '@/@types/ProductData'
import { CartEmpity } from '../CartEmpity'
import { useCartItems } from '../../hooks/useCart'

export function Cart() {
  const cartItems = useCartItems()
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

                  <ContainerQuantityAndPrice>
                    <ProductQuantityContainer>
                      <QuantityInput productId={cartItem.id} />
                    </ProductQuantityContainer>
                    <ProductPrice>
                      R${cartItem.price * cartItem.quantity}
                    </ProductPrice>
                  </ContainerQuantityAndPrice>
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
