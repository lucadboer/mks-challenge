import { ShoppingCart } from 'phosphor-react'
import { CartButton, HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <strong>MKS</strong>
        <span>Sistemas</span>
      </Logo>
      <CartButton>
        <ShoppingCart weight="bold" size={20} />
        <span>0</span>
      </CartButton>
    </HeaderContainer>
  )
}
