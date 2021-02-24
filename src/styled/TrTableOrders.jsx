import styled from 'styled-components'

export const TrTableOrders = styled.tr`
  td, th {
    vertical-align: middle;
    text-align: center;
    padding: 10px 0;
  }
  
  td:hover {
    cursor: pointer;
  }
`
export const TrTableDetail = styled.tr`
  td:nth-child(even) {
    vertical-align: middle;
    text-align: right;
    padding: 10px;
  }
`