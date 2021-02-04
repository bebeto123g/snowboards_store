import styled from 'styled-components'

export const AppFooter = styled.footer`
  width: 100%;
  min-height: 44px;
  background-color: #343a40;
  padding: 8px 16px;
  color: white;
  display: flex;
  justify-content: center;
  flex-flow: column-reverse;
  font-size: 12px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: azure;
  }
`