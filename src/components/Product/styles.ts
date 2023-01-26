import styled from 'styled-components'

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`

export const ProductImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  object-fit: cover;
`

export const ProductInfo = styled.div`
  margin-top: 0.875rem;
  display: flex;
  gap: 0.25rem;
  padding: 0 1rem;

  span {
    width: 7.75rem;
  }

  strong {
    padding: 0.35rem 0.5rem;
    margin: auto;

    font-size: 0.9375rem;

    background-color: ${({ theme }) => theme.colors.card.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};

    border-radius: 5px;
  }
`

export const ProductDetails = styled.p`
  margin-top: 0.5rem;
  font-size: 0.625rem;
  font-weight: 300;
  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.text.primary};
`

export const BuyButton = styled.button`
  margin-top: 0.75rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 500;

  background-color: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.text.secondary};

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    filter: saturate(1.5);
  }
`
