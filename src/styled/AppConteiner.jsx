import styled from 'styled-components'

export const AppContainer = styled.main`
  height: calc(100vh - 126px);
  overflow-y: scroll;

  & > div {
    min-height: 100%;
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 100px);
  }
`