import styled from 'styled-components'

export const TrTableCart = styled.tr`
  td {
    vertical-align: middle;

    &:nth-child(2) {
      width: 145px;
    }
    
    &:nth-child(3) {
      text-align: center;
      font: 20px bold black;
    }

    &:last-child {
      width: 67px;
    }
  }
`