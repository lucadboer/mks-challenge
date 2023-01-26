import { CartButton } from '../CartButton'
import { HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <strong>MKS</strong>
        <span>Sistemas</span>
      </Logo>

      <CartButton />
    </HeaderContainer>
  )
}
