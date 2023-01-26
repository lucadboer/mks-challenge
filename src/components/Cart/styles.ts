import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const CartContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30rem;
  background-color: ${({ theme }) => theme.colors.brand};
`

export const CartClose = styled(Dialog.Close)`
  position: absolute;
  top: 39px;
  right: 22px;

  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
  border-radius: 99999px;

  transition: all 0.2s;
  cursor: pointer;

  svg {
    color: #fff;
  }

  &:hover {
    transform: translateY(-4px);
  }
`

export const CartTitle = styled(Dialog.Title)`
  margin-top: 2.25rem;

  padding: 0 3rem;

  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.secondary};
`

export const CartProductsContainer = styled.main`
  margin-top: 4.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  padding: 0 3rem;
`

export const CartProduct = styled.div`
  display: flex;
  align-items: center;
  padding: 1.1875rem 1.4375rem;
  background-color: ${({ theme }) => theme.colors.card.primary};

  border-radius: 8px;
`

export const ProductQuantityContainer = styled.div``

export const ProductPrice = styled.strong``

export const CartDetails = styled.div``

export const CartBuyButton = styled.div``
