import * as Dialog from '@radix-ui/react-dialog'

import { ShoppingCart } from 'phosphor-react'
import { Cart } from '../Cart'
import { CartButtonContainer } from './styles'

export function CartButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButtonContainer>
          <ShoppingCart weight="bold" size={20} />
          <span>0</span>
        </CartButtonContainer>
      </Dialog.Trigger>

      <Cart />
    </Dialog.Root>
  )
}
