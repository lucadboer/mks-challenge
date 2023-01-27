import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 4.5rem;
  padding: 0.3rem 0.5rem;
  margin-left: 1.45rem;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`

export const MinusButton = styled.button`
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`

export const MoreButton = styled.button`
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`

export const Quantity = styled.input`
  flex: 1;
  font-size: 0.8rem;
  line-height: 130%;
  background: transparent;
  border: 0;
  width: 0.8rem;
  text-align: center;
`
