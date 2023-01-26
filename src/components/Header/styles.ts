import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  height: 6.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand};
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
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.65rem 0.75rem;
  margin-right: 5.5rem;

  font-weight: bold;
  background-color: #fff;
  border-radius: 8px;

  cursor: pointer;
`
