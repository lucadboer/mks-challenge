import { Minus, Plus } from 'phosphor-react'
import { Container, MinusButton, MoreButton, Quantity } from './styles'

export function QuantityInput() {
  return (
    <Container>
      <MinusButton>
        <Minus />
      </MinusButton>
      <Quantity type={'number'} />
      <MoreButton>
        <Plus />
      </MoreButton>
    </Container>
  )
}
