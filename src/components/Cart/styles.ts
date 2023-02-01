import * as Dialog from '@radix-ui/react-dialog'

import styled, { keyframes } from 'styled-components'

const translateIn = keyframes`
  from {
    transform: translate(100%);
  }

  to {
    transform: translate(0);
  }
`

const translateOut = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`

export const CartContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 30.5rem;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.brand};
  box-shadow: -5px 0 6px rgb(0 0 0 / 0.35);

  animation: ${translateIn} 0.4s linear;

  &[data-state='closed'] {
    animation: ${translateOut} 0.4s linear;
  }

  @media (max-width: 564px) {
    max-width: 21rem;
  }
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
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  padding: 0.75rem 3rem;

  max-height: 25rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.card.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  @media (max-width: 564px) {
    margin-top: 1.25rem;
    max-height: 20rem;
  }

  @media (max-width: 2160px) {
    max-height: 30rem;
  }
`

export const RemoveProductButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 70;

  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.card.tertiary};
  color: ${({ theme }) => theme.colors.text.secondary};

  border-radius: 9999px;

  cursor: pointer;
`

export const CartProduct = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.1875rem 1.4375rem;
  min-width: 24rem;
  background-color: ${({ theme }) => theme.colors.card.primary};

  border-radius: 8px;

  img {
    object-fit: contain;
    width: 4rem;
  }

  span {
    min-width: 7rem;
    margin-left: 1.25rem;
  }

  @media (max-width: 564px) {
    flex-direction: column;
    min-width: 15.5rem;
    padding: 1.1875rem 0;

    text-align: center;

    img {
      object-fit: contain;
      width: 5rem;
    }

    span {
      font-size: 1rem;
      padding: 1rem 0;
    }
  }
`

export const ContainerQuantityAndPrice = styled.div`
  display: flex;

  @media (max-width: 564px) {
    display: flex;
    align-items: center;
    gap: 1.75rem;
  }
`

export const ProductQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 9px;

  gap: 0.25rem;

  span {
    font-size: 8px;
  }
`

export const ProductPrice = styled.strong`
  margin-left: 2.5rem;
  font-weight: bold;

  @media (max-width: 564px) {
    padding: 0.5rem 0.75rem;
    margin: auto;

    font-size: 0.9375rem;

    background-color: ${({ theme }) => theme.colors.card.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};

    border-radius: 5px;
  }
`

export const CartDetails = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding: 0 3rem;

  font-size: 1.75rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 564px) {
    font-size: 1.75rem;
  }
`

export const CartBuyButton = styled.div`
  height: 6rem;
  margin-top: 2.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.75rem;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.card.tertiary};

  transition: color 0.2s;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
  }

  @media (max-width: 564px) {
    margin-top: 2rem;

    height: 100%;
    max-height: 4rem !important;
    font-size: 1.25rem;
  }
`
