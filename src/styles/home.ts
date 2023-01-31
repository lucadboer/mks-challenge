import styled from 'styled-components'

export const ProductsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  max-width: 59rem;
  width: 100%;

  margin: auto;
  margin-top: 7.25rem;

  @media (max-width: 1024px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    padding: 0 2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }
`

export const Footer = styled.footer`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  margin-top: 8rem;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`
