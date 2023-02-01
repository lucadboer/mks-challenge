import { useCartItems } from '../../hooks/useCart'
import * as Dialog from '@radix-ui/react-dialog'

import { ShoppingCart } from 'phosphor-react'
import { Cart } from '../Cart'
import { CartButtonContainer } from './styles'

export function CartButton() {
  const cartItems = useCartItems()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButtonContainer>
          <ShoppingCart weight="bold" size={20} />
          <span>{cartItems.length}</span>
        </CartButtonContainer>
      </Dialog.Trigger>

      <Cart />
    </Dialog.Root>
  )
}
