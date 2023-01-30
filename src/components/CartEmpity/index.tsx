import { SmileySad } from 'phosphor-react'
import { CartEmpityContainer } from './styles'

export function CartEmpity() {
  return (
    <CartEmpityContainer>
      <strong>Parece que seu carrinho está vazio.</strong>
      <SmileySad size={72} weight="fill" />
    </CartEmpityContainer>
  )
}
