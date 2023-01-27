import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { Container, MinusButton, MoreButton, Quantity } from './styles'

export function QuantityInput() {
  const [quantity, setQuantity] = useState(0)

  return (
    <Container>
      <MinusButton
        onClick={() => {
          if (quantity <= 0) {
            return
          }
          setQuantity((state) => state - 1)
        }}
      >
        <Minus size={8} />
      </MinusButton>
      <Quantity type={'number'} disabled value={quantity} />
      <MoreButton
        onClick={() => {
          setQuantity((state) => state + 1)
        }}
      >
        <Plus size={8} />
      </MoreButton>
    </Container>
  )
}
