import { selectCartItems } from '@/redux/slice/cart'
import * as Dialog from '@radix-ui/react-dialog'

import { ShoppingCart } from 'phosphor-react'
import { useSelector } from 'react-redux'
import { Cart } from '../Cart'
import { CartButtonContainer } from './styles'

export function CartButton() {
  const cartItems = useSelector(selectCartItems)

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
