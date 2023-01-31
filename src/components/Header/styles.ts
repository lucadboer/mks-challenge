import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand};

  @media (max-width: 768px) {
    height: 5rem;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-left: 4.0625rem;
  color: ${({ theme }) => theme.colors.text.secondary};

  strong {
    font-size: 2.5rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    margin: 1.25rem;
  }
`
