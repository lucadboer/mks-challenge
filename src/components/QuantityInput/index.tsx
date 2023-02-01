import { changeItemQuantity } from '@/redux/slice/cart'
import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, MinusButton, MoreButton, Quantity } from './styles'

interface QuantityInputProps {
  productId: number
}

export function QuantityInput({ productId }: QuantityInputProps) {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      changeItemQuantity({
        productId,
        quantity,
      }),
    )
  }, [quantity])

  return (
    <Container>
      <MinusButton
        onClick={() => {
          if (quantity === 1) {
            return
          }
          setQuantity((state) => state - 1)
        }}
      >
        <Minus size={10} weight="bold" />
      </MinusButton>
      <Quantity type={'number'} disabled value={quantity} />
      <MoreButton
        onClick={() => {
          setQuantity((state) => state + 1)
        }}
      >
        <Plus size={10} weight="bold" />
      </MoreButton>
    </Container>
  )
}
