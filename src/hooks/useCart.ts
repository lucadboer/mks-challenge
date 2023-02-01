import { selectCartItems } from '../redux/slice/cart'
import { useSelector } from 'react-redux'

export function useCartItems() {
  return useSelector(selectCartItems)
}
